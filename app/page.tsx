// import { business } from "@/config/business";
import { services } from "@/content/services";
import { faqs } from "@/content/faqs";
import { Hero } from "@/components/hero";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
	return (
		<section className="grid gap-12">
			<Hero />

			<section className="grid gap-6">
				<h2 className="text-2xl font-semibold">Our Services</h2>
				<div className="grid gap-6 sm:grid-cols-2">
					{services.map((s) => (
						<article key={s.slug} className="border rounded-lg p-4">
							<h3 className="font-semibold">{s.title}</h3>
							<p className="text-sm text-muted-foreground">{s.summary}</p>
						</article>
					))}
				</div>
			</section>

			<section className="grid gap-4">
				<h2 className="text-2xl font-semibold">FAQs</h2>
				<div className="grid gap-3">
					{faqs.map((f) => (
						<details key={f.question} className="border rounded-lg p-3">
							<summary className="cursor-pointer font-medium">
								{f.question}
							</summary>
							<p className="text-sm text-muted-foreground mt-2">{f.answer}</p>
						</details>
					))}
				</div>
			</section>

			<section id="contact" className="grid gap-4">
				<h2 className="text-2xl font-semibold">Book Online</h2>
				<p className="text-muted-foreground">
					Send us your details and we’ll get back to you promptly.
				</p>
				<ContactForm />
			</section>
		</section>
	);
}
