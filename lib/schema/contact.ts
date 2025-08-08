import { z } from "zod";

export const contactSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	phone: z.string().min(7).max(20),
	service: z.string().min(1),
	message: z.string().min(10),
	consent: z.literal(true, { message: "Consent required" }),
	hp: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
