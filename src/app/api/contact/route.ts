import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, projectType, location, message } = body;

    // Basic Validation
    if (!name || !phone || !email || !location) {
      return NextResponse.json(
        { error: "Name, phone, email, and project location are required." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || gmailUser || "jakdesigns2017@gmail.com";

    // Verify SMTP credentials are configured
    if (!gmailUser || !gmailAppPassword) {
      console.warn(
        "[Contact API] Gmail credentials missing. Please set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local"
      );
      return NextResponse.json(
        {
          error:
            "Email service is not fully configured yet. Please configure GMAIL_APP_PASSWORD in .env.local or contact the team directly via phone/WhatsApp.",
        },
        { status: 503 }
      );
    }

    // Configure Nodemailer Gmail Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const cleanPhone = phone.replace(/[^0-9+]/g, "");
    const whatsappLink = `https://wa.me/${cleanPhone.replace("+", "")}?text=${encodeURIComponent(
      `Hello ${name}, thank you for contacting JAK Designs & Construction regarding your ${projectType || "project"}.`
    )}`;

    const submittedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Elegant architectural email template
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead - JAK Designs & Construction</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f5f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #142544;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f5f8; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 6px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);" cellspacing="0" cellpadding="0">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #142544; padding: 30px 35px; border-bottom: 4px solid #F59E0B;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #F59E0B; font-weight: 700; margin-bottom: 6px; font-family: monospace;">
                      NEW CONSULTATION INQUIRY
                    </div>
                    <div style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                      JAK DESIGNS &amp; CONSTRUCTION
                    </div>
                    <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">
                      Received: ${submittedDate} (IST)
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Lead Overview Card -->
          <tr>
            <td style="padding: 30px 35px 20px 35px;">
              <h2 style="font-size: 18px; margin: 0 0 16px 0; color: #142544; font-weight: 700;">
                Client Details
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 4px; border: 1px solid #e2e8f0; padding: 16px 20px;">
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #64748b; width: 140px;">Client Name:</td>
                  <td style="padding: 6px 0; font-size: 14px; font-weight: 700; color: #142544;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #64748b;">Phone Number:</td>
                  <td style="padding: 6px 0; font-size: 14px; font-weight: 700; color: #142544;">
                    <a href="tel:${cleanPhone}" style="color: #0284c7; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #64748b;">Email Address:</td>
                  <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #142544;">
                    <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Specification Card -->
          <tr>
            <td style="padding: 0 35px 20px 35px;">
              <h2 style="font-size: 18px; margin: 0 0 16px 0; color: #142544; font-weight: 700;">
                Project Specifications
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 4px; border: 1px solid #e2e8f0; padding: 16px 20px;">
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #64748b; width: 140px;">Project Scope:</td>
                  <td style="padding: 6px 0; font-size: 14px; font-weight: 700; color: #F59E0B;">
                    ${projectType || "General Consultation"}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #64748b;">Project Location:</td>
                  <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #142544;">${location}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Client Message / Project Notes -->
          <tr>
            <td style="padding: 0 35px 30px 35px;">
              <h2 style="font-size: 18px; margin: 0 0 12px 0; color: #142544; font-weight: 700;">
                Project Vision &amp; Notes
              </h2>
              <div style="background-color: #fff; border: 1px solid #cbd5e1; border-left: 4px solid #142544; border-radius: 4px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">
                ${message ? message : "<em>No additional details provided.</em>"}
              </div>
            </td>
          </tr>

          <!-- Quick Action Buttons -->
          <tr>
            <td style="padding: 0 35px 35px 35px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-bottom: 12px;">
                    <a href="tel:${cleanPhone}" style="display: inline-block; background-color: #142544; color: #ffffff; padding: 12px 24px; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 4px; margin-right: 8px;">
                      📞 Call Client
                    </a>
                    <a href="mailto:${email}?subject=${encodeURIComponent("Re: Consultation with JAK Designs & Construction")}" style="display: inline-block; background-color: #F59E0B; color: #142544; padding: 12px 24px; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 4px; margin-right: 8px;">
                      ✉️ Reply by Email
                    </a>
                    <a href="${whatsappLink}" target="_blank" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 12px 24px; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 4px;">
                      💬 WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0e1b33; padding: 20px 35px; text-align: center; font-size: 11px; color: #94a3b8;">
              <p style="margin: 0 0 4px 0;">JAK Designs &amp; Construction &bull; Architectural Innovation, Building Excellence</p>
              <p style="margin: 0;">Mylapore, Chennai - 600004 &bull; +91 99947 09073 &bull; <a href="https://www.jakdesignstudios.com" style="color: #F59E0B; text-decoration: none;">www.jakdesignstudios.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Plain text alternative
    const textContent = `
NEW CONSULTATION INQUIRY - JAK DESIGNS & CONSTRUCTION
======================================================
Received: ${submittedDate} (IST)

CLIENT DETAILS:
- Name: ${name}
- Phone: ${phone}
- Email: ${email}

PROJECT SPECIFICATIONS:
- Project Scope: ${projectType || "General Consultation"}
- Location: ${location}

CLIENT MESSAGE / REQUIREMENTS:
${message || "No additional details provided."}

------------------------------------------------------
JAK Designs & Construction • www.jakdesignstudios.com
    `.trim();

    // Send email via Gmail SMTP
    await transporter.sendMail({
      from: `"JAK Website Leads" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `🏛️ New Lead: ${name} - ${projectType} (${location})`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry transmitted successfully. We will reach out shortly.",
    });
  } catch (error: unknown) {
    console.error("[Contact API] Error sending lead email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to process consultation request.";
    return NextResponse.json(
      {
        error:
          "Unable to send your inquiry at this moment. Please call or WhatsApp us directly at +91 99947 09073.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
