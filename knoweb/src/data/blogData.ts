export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}

export interface FeaturedProject {
  title: string;
  category: string;
  image: string;
  href: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  { name: 'Enterprise AI & Automation', slug: 'enterprise-ai-automation', count: 14 },
  { name: 'Cloud ERP Solutions', slug: 'cloud-erp-solutions', count: 11 },
  { name: 'SaaS & Digital Ordering', slug: 'saas-digital-ordering', count: 9 },
  { name: 'DevOps & Maintenance', slug: 'devops-maintenance', count: 8 },
  { name: 'HR Tech & Compliance', slug: 'hr-tech-compliance', count: 6 },
  { name: 'Software Strategy', slug: 'software-strategy', count: 7 },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: 'Ginum ERP',
    category: 'Financial Intelligence',
    image: '/ginum-dashboard-bg.jpg',
    href: '/saas',
  },
  {
    title: 'Anawuma Platform',
    category: 'QR Ordering & POS',
    image: '/anawuma-dashboard-bg.jpg',
    href: '/saas',
  },
  {
    title: 'PirisaHR',
    category: 'Payroll & HR Suite',
    image: '/pirisahr-dashboard-bg.jpg',
    href: '/saas',
  },
  {
    title: 'Thanayama System',
    category: 'Hospitality Management',
    image: '/thanayama-dashboard-bg.jpg',
    href: '/saas',
  },
  {
    title: 'QuickAssist AI',
    category: 'Rapid Tech Support',
    image: '/quickassist-robot.png',
    href: '/quickassist',
  },
  {
    title: 'Custom Engineering',
    category: 'Enterprise Scalability',
    image: '/knoweb-services-tech.png',
    href: '/services',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-enterprise-automation-sri-lanka',
    title: 'The Future of Enterprise Automation & AI in Sri Lanka',
    category: 'Enterprise AI & Automation',
    author: {
      name: 'Kavindu Perera',
      role: 'Head of Engineering',
      avatar: 'KP',
    },
    date: '28 Oct 2026',
    readTime: '6 min read',
    excerpt:
      'Discover how modern cloud ERP and intelligent automation are transforming Sri Lankan manufacturing, retail, and logistics from manual paper workflows into high-efficiency smart operations.',
    content: [
      'Digital transformation across South Asia is entering a new era. Companies that once relied on physical logbooks, isolated Excel spreadsheets, and ad-hoc phone calls are realizing that operational delays directly impact their bottom line.',
      'By integrating automated inventory tracking, instant invoice reconciliation, and AI-assisted demand forecasting, modern enterprises are achieving unprecedented turnaround speeds and cutting manual administrative errors by over 60%.',
      'At Knoweb, our engineering philosophy focuses on practical digitalization — not bloated software suites with unnecessary complexity, but pragmatic systems that field personnel and executives can adopt within days.',
    ],
    image: '/knoweb-services-tech.png',
    tags: ['Automation', 'AI', 'ERP', 'Sri Lanka'],
    featured: true,
  },
  {
    id: '2',
    slug: 'why-cloud-erp-outperforms-legacy-spreadsheets',
    title: 'Why Modern Cloud ERP Outperforms Legacy Spreadsheet Systems',
    category: 'Cloud ERP Solutions',
    author: {
      name: 'Nuwan Jayasuriya',
      role: 'ERP Solutions Architect',
      avatar: 'NJ',
    },
    date: '14 Oct 2026',
    readTime: '7 min read',
    excerpt:
      'Rising operational costs and fragmented spreadsheets slow down growing businesses. We explore how unified real-time accounting, inventory tracking, and sales analytics cut administrative overhead by up to 35%.',
    content: [
      'Spreadsheets are wonderful calculation tools, but terrible databases. As soon as multiple branch managers, sales representatives, and warehouse supervisors edit files simultaneously, version conflicts and data loss become inevitable.',
      'A true multi-branch Cloud ERP platform provides a single source of truth. Every sales transaction instantly deducts from inventory, updates the general ledger, and generates real-time financial statements without manual intervention.',
      'With platforms like Ginum ERP, SME leaders gain high-altitude operational visibility from any device, whether in the office or on the road.',
    ],
    image: '/ginum-dashboard-bg.jpg',
    tags: ['Cloud ERP', 'Finance', 'Ginum', 'Inventory'],
    featured: true,
  },
  {
    id: '3',
    slug: 'why-preventive-maintenance-matters',
    title: 'Why Preventive Maintenance & Website Takeover Matter for Growing Businesses',
    category: 'DevOps & Maintenance',
    author: {
      name: 'Sahan Wickrama',
      role: 'DevOps & Support Lead',
      avatar: 'SW',
    },
    date: '02 Oct 2026',
    readTime: '5 min read',
    excerpt:
      'Don’t wait for a breakdown, developer abandonment, or security vulnerability. Learn the critical importance of automated backups, server patch monitoring, and SSL enforcement to protect your revenue.',
    content: [
      'In today’s digital-first market, website downtime or security warnings like "Not Secure" immediately erode buyer confidence. Most critical server failures could have been prevented with basic monitoring and scheduled health checks.',
      'Our Website Takeover and Maintenance service rescues orphaned systems, stabilizes fragile codebases, resolves database bottlenecks, and upgrades server security protocols to modern production standards.',
      'Preventive care costs a fraction of emergency recovery, while guaranteeing your customer-facing platforms stay online 24/7/365.',
    ],
    image: '/hero-dashboard.png',
    tags: ['DevOps', 'Maintenance', 'SSL', 'Security'],
    featured: true,
  },
  {
    id: '4',
    slug: 'transforming-restaurant-and-retail-with-qr-systems',
    title: 'Transforming Restaurant & Retail Experiences with QR & Hospitality Systems',
    category: 'SaaS & Digital Ordering',
    author: {
      name: 'Dinithi Fernando',
      role: 'Product Manager — Anawuma',
      avatar: 'DF',
    },
    date: '18 Sep 2026',
    readTime: '6 min read',
    excerpt:
      'From contactless QR table ordering to instant kitchen display synchronization, explore how hospitality platforms eliminate order errors, speed up turnarounds, and delight guests.',
    content: [
      'Hospitality venues face rising labor pressures and fast-shifting customer expectations. Traditional paper menus and handwriting orders lead to kitchen delays, missed modifier requests, and lost revenue during peak hours.',
      'Anawuma introduces an interactive QR digital dining experience where guests can browse photo-rich menus, customize orders, and settle bills seamlessly from their smartphone.',
      'Orders route directly to the Kitchen Display System (KDS), reducing wait times by 40% and boosting table turnover rates across multi-outlet restaurants.',
    ],
    image: '/anawuma-dashboard-bg.jpg',
    tags: ['Anawuma', 'Hospitality', 'QR Ordering', 'POS'],
    featured: true,
  },
  {
    id: '5',
    slug: 'automated-payroll-and-hr-compliance-sri-lanka',
    title: 'Automated Payroll & HR Compliance in Sri Lanka: Navigating EPF, ETF & Labour Laws',
    category: 'HR Tech & Compliance',
    author: {
      name: 'Amal Silva',
      role: 'HR & Compliance Advisor',
      avatar: 'AS',
    },
    date: '05 Sep 2026',
    readTime: '8 min read',
    excerpt:
      'A comprehensive operational guide on moving from manual salary calculations to automated pay slips, overtime calculations, leave tracking, and statutory compliance with zero payroll friction.',
    content: [
      'Processing monthly payroll in Sri Lanka requires strict adherence to statutory EPF, ETF, APIT, and Department of Labour guidelines. Calculating overtime, deductions, and unpaid leaves manually for dozens of employees invites human error.',
      'PirisaHR automates this entire cycle. With one click, managers generate encrypted digital payslips, export statutory bank submission sheets, and track employee attendance records securely.',
      'Switching to cloud HR tech saves business owners dozens of hours each month while ensuring complete regulatory compliance.',
    ],
    image: '/pirisahr-dashboard-bg.jpg',
    tags: ['HR Tech', 'Payroll', 'PirisaHR', 'Compliance'],
  },
  {
    id: '6',
    slug: 'custom-software-vs-ready-made-saas-decision-guide',
    title: 'Custom Software vs. Ready-Made SaaS: Making the Right Strategic Investment',
    category: 'Software Strategy',
    author: {
      name: 'Knoweb Solutions Team',
      role: 'Enterprise Advisory',
      avatar: 'KW',
    },
    date: '22 Aug 2026',
    readTime: '9 min read',
    excerpt:
      'Should you build a custom proprietary application from scratch or configure an existing SaaS platform? A practical decision matrix for SMEs and enterprise leaders to maximize ROI.',
    content: [
      'Every growing business eventually faces the build vs. buy dilemma. Off-the-shelf software offers fast deployment and lower upfront costs, but often imposes rigid workflows that do not fit unique business models.',
      'Custom software provides total operational ownership, custom integrations, and infinite scalability, but requires dedicated architecture planning and experienced engineering teams.',
      'At Knoweb, we bridge this gap by offering configurable modular SaaS platforms alongside tailored enterprise engineering, ensuring our clients receive the best of both worlds.',
    ],
    image: '/solution.jpg',
    tags: ['Software Strategy', 'SaaS', 'Custom Development'],
  },
];
