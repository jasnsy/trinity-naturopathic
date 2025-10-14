import nodemailer from "nodemailer";
import type { EmailProvider, SendEmailParams } from "../email-adapter";

export const smtpProvider = (): EmailProvider => {
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT ?? 587),
		secure: false,
		auth: process.env.SMTP_USER
			? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
			: undefined,
	});
	return {
		async send({ to, subject, html }: SendEmailParams) {
			await transporter.sendMail({
				to,
				from: "Trinity Naturopathic <noreply@trinitynaturopathic.example>",
				subject,
				html,
			});
		},
	};
};
