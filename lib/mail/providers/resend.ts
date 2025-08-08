import { Resend } from "resend";
import type { EmailProvider, SendEmailParams } from "../email-adapter";

export const resendProvider = (): EmailProvider => {
	const apiKey = process.env.RESEND_API_KEY;
	const client = new Resend(apiKey);
	return {
		async send({ to, subject, html }: SendEmailParams) {
			if (!apiKey) throw new Error("RESEND_API_KEY missing");
			await client.emails.send({
				to,
				from: "Acme Inc. <noreply@acmeinc.example>",
				subject,
				html,
			});
		},
	};
};
