import { business } from "@/config/business";
import { ContactForm } from "@/components/contact-form";

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
