import type { Metadata } from "next";
import { business } from "@/config/business";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
	title: `Contact Us | ${business.businessName}`,
	description: `Book your naturopathic consultation in Fort McMurray. Call ${business.phone} or send us a message to schedule your appointment for mental health and wellness care.`,
	openGraph: {
		title: `Contact ${business.businessName}`,
		description: `Schedule your naturopathic appointment in Fort McMurray for integrative mental health and wellness care.`,
	},
	twitter: {
		card: "summary",
		title: `Contact ${business.businessName}`,
		description: `Schedule your naturopathic appointment in Fort McMurray for integrative mental health and wellness care.`,
	},
};

export default function ContactPage() {
	return (
		<section className="grid gap-6">
			<div>
				<h1 className="text-3xl font-semibold">Contact Us</h1>
				<p className="text-muted-foreground mt-2">
					Call us at{" "}
					<a
						className="underline"
						href={`tel:${business.phone.replace(/[^+\d]/g, "")}`}
					>
						{business.phone}
					</a>{" "}
					or send a message using the form.
				</p>
			</div>
			<ContactForm />
		</section>
	);
}
