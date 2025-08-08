export type SendEmailParams = {
	to: string;
	subject: string;
	html: string;
};

export interface EmailProvider {
	send: (params: SendEmailParams) => Promise<void>;
}

export const getEmailProvider = async (): Promise<EmailProvider> => {
	const provider = process.env.EMAIL_PROVIDER ?? "resend";
	if (provider === "smtp") {
		const { smtpProvider } = await import("./providers/smtp");
		return smtpProvider();
	}
	const { resendProvider } = await import("./providers/resend");
	return resendProvider();
};
