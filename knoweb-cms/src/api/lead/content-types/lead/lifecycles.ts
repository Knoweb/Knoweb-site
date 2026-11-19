export default {
  async afterCreate(event: any) {
    const { result } = event;
    if (!result) return;

    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: Number(process.env.SMTP_PORT) || 465,
          secure: Boolean(process.env.SMTP_SECURE !== 'false'),
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const notifyEmail = process.env.TEAM_NOTIFY_EMAIL || 'info@knowebsolutions.com';

        // 1. Internal alert to Knoweb Team
        await transporter.sendMail({
          from: `"Knoweb Website Lead" <${process.env.SMTP_USER}>`,
          to: notifyEmail,
          subject: `[New Inquiry] ${result.inquiryType} from ${result.name}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #1e293b; max-width: 640px;">
              <h2 style="color: #004FEB; margin-top: 0;">New Website Inquiry Received</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                <tr><td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Name:</strong></td><td>${result.name}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td><td><a href="mailto:${result.email}">${result.email}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Company:</strong></td><td>${result.company || 'N/A'}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Role:</strong></td><td>${result.role || 'N/A'}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Enquiry Type:</strong></td><td>${result.inquiryType}</td></tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 18px 0;" />
              <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
              <div style="background: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 0.92rem; line-height: 1.5;">
                ${result.message}
              </div>
            </div>
          `,
        });

        // 2. Automated Confirmation Email to Client
        await transporter.sendMail({
          from: `"Knoweb Team" <${process.env.SMTP_USER}>`,
          to: result.email,
          subject: `Thank you for contacting Knoweb - Inquiry Received`,
          html: `
            <div style="font-family: sans-serif; padding: 24px; color: #1e293b; max-width: 600px;">
              <div style="margin-bottom: 20px;">
                <h2 style="color: #004FEB; margin: 0;">Knoweb</h2>
                <p style="color: #64748b; margin: 4px 0 0 0; font-size: 0.9rem;">Enterprise ERP, AI Automation & Scalable Software</p>
              </div>
              <p>Dear ${result.name},</p>
              <p>Thank you for reaching out to us regarding <strong>${result.inquiryType}</strong>.</p>
              <p>We have successfully received your inquiry, and a member of our enterprise team will review your details and respond within one business day.</p>
              <div style="background: #f0f7ff; padding: 14px 18px; border-left: 4px solid #004FEB; border-radius: 4px; margin: 20px 0;">
                <p style="margin: 0; font-size: 0.92rem; color: #1e3a8a;">
                  <strong>Your Submitted Request:</strong><br/>
                  ${result.message}
                </p>
              </div>
              <p style="margin-top: 24px; font-size: 0.9rem; color: #64748b;">
                Best regards,<br/>
                <strong>The Knoweb Team</strong><br/>
                <a href="https://knoweb.lk" style="color: #004FEB; text-decoration: none;">www.knoweb.lk</a>
              </p>
            </div>
          `,
        });

        console.log(`[Email Engine] Sent notification & auto-reply for lead: ${result.email}`);
      } else {
        console.log(`[Lead Saved] New inquiry from ${result.name} (${result.email}). SMTP not configured in .env, skipping email delivery.`);
      }
    } catch (emailErr) {
      console.error('[Email Engine Error]:', emailErr);
    }
  },
};
