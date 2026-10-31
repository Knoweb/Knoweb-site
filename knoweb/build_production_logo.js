const fs = require('fs');
const sharp = require('./node_modules/sharp');
const GIFEncoder = require('gif-encoder-2');

// Dimensions
const MASTER_W = 1200;
const MASTER_H = 275;
const CX = 550;
const CY = 142;
const R = 126.5;
const TILT = -0.38;

const continents = [
  // Europe
  [
    [70, 25], [60, 30], [55, 38], [45, 35], [40, 26], [36, -5],
    [43, -9], [48, -4], [55, 8], [60, 5], [71, 28]
  ],
  // UK
  [
    [58, -3], [52, 2], [50, -5], [54, -5], [58, -3]
  ],
  // Africa
  [
    [36, -5], [37, 10], [32, 32], [28, 34], [12, 44], [12, 51],
    [-5, 40], [-25, 33], [-34, 18], [-34, 26], [-20, 12], [-5, 12],
    [5, 2], [5, -4], [15, -17], [28, -13], [36, -5]
  ],
  // Madagascar
  [
    [-12, 49], [-25, 47], [-25, 43], [-15, 46], [-12, 49]
  ],
  // Asia
  [
    [75, 100], [70, 170], [60, 170], [55, 135], [40, 130], [30, 122],
    [22, 114], [10, 105], [1, 104], [15, 96], [22, 90], [8, 77],
    [24, 68], [25, 60], [12, 44], [30, 35], [40, 36], [42, 50],
    [55, 60], [60, 70], [70, 75], [75, 100]
  ],
  // Japan
  [
    [45, 142], [35, 140], [31, 131], [38, 138], [45, 142]
  ],
  // India
  [
    [25, 68], [28, 77], [22, 90], [15, 80], [8, 77], [18, 73], [25, 68]
  ],
  // Australia
  [
    [-12, 132], [-15, 136], [-12, 142], [-22, 150], [-34, 151],
    [-38, 145], [-35, 115], [-22, 114], [-15, 124], [-12, 132]
  ],
  // North America
  [
    [72, -125], [70, -70], [55, -60], [45, -65], [30, -80], [25, -80],
    [20, -87], [15, -92], [22, -105], [30, -115], [38, -123], [48, -125],
    [60, -140], [65, -168], [70, -160], [72, -125]
  ],
  // South America
  [
    [12, -72], [10, -62], [5, -52], [-5, -35], [-22, -41], [-35, -53],
    [-55, -68], [-45, -75], [-20, -70], [-5, -81], [5, -77], [12, -72]
  ]
];

function project(latDeg, lonDeg, rotRad) {
  const lat = (latDeg * Math.PI) / 180;
  const lon = (lonDeg * Math.PI) / 180 + rotRad;

  const x3d = Math.cos(lat) * Math.sin(lon);
  const y3d = Math.sin(lat);
  const z3d = Math.cos(lat) * Math.cos(lon);

  const cosT = Math.cos(TILT);
  const sinT = Math.sin(TILT);

  const xRot = x3d * cosT - y3d * sinT;
  const yRot = x3d * sinT + y3d * cosT;

  const screenX = CX + R * xRot;
  const screenY = CY - R * yRot;

  return { x: screenX, y: screenY, z: z3d };
}

function renderGlobeSvg(rotRad) {
  let meridiansSvg = '';
  for (let m = 0; m < 12; m++) {
    const lonDeg = m * 30;
    let d = '';
    let drawing = false;
    for (let latDeg = -88; latDeg <= 88; latDeg += 3) {
      const p = project(latDeg, lonDeg, rotRad);
      if (p.z >= -0.05) {
        if (!drawing) {
          d += `M ${p.x.toFixed(1)} ${p.y.toFixed(1)} `;
          drawing = true;
        } else {
          d += `L ${p.x.toFixed(1)} ${p.y.toFixed(1)} `;
        }
      } else {
        drawing = false;
      }
    }
    if (d) {
      meridiansSvg += `<path d="${d}" fill="none" stroke="#00A8FF" stroke-width="2.2" stroke-linecap="round"/>\n`;
    }
  }

  let parallelsSvg = '';
  const lats = [-60, -36, -12, 12, 36, 60];
  for (const latDeg of lats) {
    let d = '';
    let drawing = false;
    for (let step = 0; step <= 360; step += 3) {
      const p = project(latDeg, step, rotRad);
      if (p.z >= -0.05) {
        if (!drawing) {
          d += `M ${p.x.toFixed(1)} ${p.y.toFixed(1)} `;
          drawing = true;
        } else {
          d += `L ${p.x.toFixed(1)} ${p.y.toFixed(1)} `;
        }
      } else {
        drawing = false;
      }
    }
    if (d) {
      parallelsSvg += `<path d="${d}" fill="none" stroke="#0092E8" stroke-width="2.2" stroke-linecap="round"/>\n`;
    }
  }

  let continentsSvg = '';
  for (const land of continents) {
    let points = [];
    let isVisible = false;
    for (let i = 0; i < land.length; i++) {
      const p1 = land[i];
      const p2 = land[(i + 1) % land.length];
      for (let s = 0; s < 5; s++) {
        const lat = p1[0] + (p2[0] - p1[0]) * (s / 5);
        const lon = p1[1] + (p2[1] - p1[1]) * (s / 5);
        const pt = project(lat, lon, rotRad);
        points.push(pt);
        if (pt.z > 0.05) isVisible = true;
      }
    }

    if (isVisible) {
      let d = '';
      let drawing = false;
      let startP = null;
      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        if (pt.z >= -0.05) {
          if (!drawing) {
            d += `M ${pt.x.toFixed(1)} ${pt.y.toFixed(1)} `;
            startP = pt;
            drawing = true;
          } else {
            d += `L ${pt.x.toFixed(1)} ${pt.y.toFixed(1)} `;
          }
        } else {
          drawing = false;
        }
      }
      if (d && startP) {
        d += ' Z';
        continentsSvg += `<path d="${d}" fill="#00D4FF" fill-opacity="0.38" stroke="#00E5FF" stroke-width="1.2" stroke-opacity="0.8"/>\n`;
      }
    }
  }

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${MASTER_W}" height="${MASTER_H}" viewBox="0 0 ${MASTER_W} ${MASTER_H}">
  <defs>
    <clipPath id="globeMask">
      <circle cx="${CX}" cy="${CY}" r="${R}"/>
    </clipPath>
    <radialGradient id="globeBackglow" cx="45%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#E0F7FF" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#00A8FF" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#0066CC" stop-opacity="0.0"/>
    </radialGradient>
  </defs>

  <g clip-path="url(#globeMask)">
    <circle cx="${CX}" cy="${CY}" r="${R}" fill="url(#globeBackglow)"/>
    ${continentsSvg}
    ${parallelsSvg}
    ${meridiansSvg}
  </g>
</svg>
`;
}

async function buildAll() {
  console.log('Building high-quality production logo animation assets...');
  const foregroundBuf = await sharp('public/knoweb-logo-static-foreground.png').png().toBuffer();

  const NUM_FRAMES = 48;
  const SPRITE_W = 320;
  const SPRITE_H = 74;

  const spriteFrames = [];
  const gifEncoder = new GIFEncoder(SPRITE_W, SPRITE_H, 'neuquant', true);
  gifEncoder.start();
  gifEncoder.setRepeat(0); // Infinite loop
  gifEncoder.setDelay(208); // 208ms * 48 = 10.0s period
  gifEncoder.setQuality(10);
  gifEncoder.setThreshold(40);

  console.log(`Rendering ${NUM_FRAMES} frames...`);

  for (let f = 0; f < NUM_FRAMES; f++) {
    const progress = f / NUM_FRAMES;
    const rotRad = progress * 2 * Math.PI;

    const globeSvg = renderGlobeSvg(rotRad);
    const globePng = await sharp(Buffer.from(globeSvg)).png().toBuffer();

    const masterFrame = await sharp(globePng)
      .composite([{ input: foregroundBuf, top: 0, left: 0 }])
      .png()
      .toBuffer();

    // Scale to sprite resolution (320x74)
    const scaledRaw = await sharp(masterFrame)
      .resize(SPRITE_W, SPRITE_H)
      .ensureAlpha()
      .raw()
      .toBuffer();

    spriteFrames.push(scaledRaw);
    gifEncoder.addFrame({ data: scaledRaw });

    if ((f + 1) % 12 === 0) {
      console.log(`Rendered frame ${f + 1} / ${NUM_FRAMES}`);
    }
  }

  // 1. Build CSS Sprite Sheet
  console.log('Writing CSS Sprite Sheets (PNG & WebP)...');
  const stackedSprites = Buffer.concat(spriteFrames);
  
  await sharp(stackedSprites, {
    raw: { width: SPRITE_W, height: SPRITE_H * NUM_FRAMES, channels: 4 }
  })
  .png({ compressionLevel: 9 })
  .toFile('public/knoweb-logo-spritesheet.png');

  await sharp(stackedSprites, {
    raw: { width: SPRITE_W, height: SPRITE_H * NUM_FRAMES, channels: 4 }
  })
  .webp({ quality: 90, effort: 6 })
  .toFile('public/knoweb-logo-spritesheet.webp');

  const spriteStats = fs.statSync('public/knoweb-logo-spritesheet.png');
  console.log(`Sprite sheet PNG: ${(spriteStats.size / 1024).toFixed(1)} KB`);

  // 2. Build Genuine Animated GIF
  console.log('Writing genuine animated GIF (public/knoweb-logo-animated.gif)...');
  gifEncoder.finish();
  const gifBuffer = gifEncoder.out.getData();
  fs.writeFileSync('public/knoweb-logo-animated.gif', gifBuffer);
  fs.writeFileSync('public/knoweb-logo-animated-nav.gif', gifBuffer);

  const gifStats = fs.statSync('public/knoweb-logo-animated.gif');
  console.log(`Genuine Animated GIF: ${(gifStats.size / 1024).toFixed(1)} KB`);

  // 3. Convert GIF to genuine animated WebP via Sharp
  console.log('Writing genuine animated WebP (public/knoweb-logo-animated-nav.webp)...');
  await sharp(gifBuffer, { animated: true })
    .webp({ loop: 0, quality: 90 })
    .toFile('public/knoweb-logo-animated-nav.webp');

  await sharp(gifBuffer, { animated: true })
    .webp({ loop: 0, quality: 90 })
    .toFile('public/knoweb-logo-animated.webp');

  const webpStats = fs.statSync('public/knoweb-logo-animated-nav.webp');
  console.log(`Genuine Animated WebP: ${(webpStats.size / 1024).toFixed(1)} KB`);

  console.log('Done building production assets!');
}

buildAll().catch(err => console.error(err));
