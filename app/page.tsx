// import { business } from "@/config/business";
import { services } from "@/content/services";
import { symptoms } from "@/content/symptoms";
import { faqs } from "@/content/faqs";
import { Hero } from "@/components/hero";
import { ContactForm } from "@/components/contact-form";
import { BookNowCta } from "@/components/book-now-cta";

export default function Home() {
	return (
		<section className="grid gap-12">
			<Hero />

			<section className="grid gap-6">
				<h2 className="text-2xl font-semibold">Services We Offer</h2>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((s) => (
						<article key={s.slug} className="border rounded-lg p-4">
							<h3 className="font-semibold">{s.title}</h3>
							<p className="text-sm text-muted-foreground">{s.summary}</p>
						</article>
					))}
				</div>
			</section>

			<section className="grid gap-6">
				<h2 className="text-2xl font-semibold">Conditions We Treat</h2>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{symptoms.map((symptom) => (
						<article key={symptom.slug} className="border rounded-lg p-4">
							<h3 className="font-semibold">{symptom.title}</h3>
							<p className="text-sm text-muted-foreground">{symptom.summary}</p>
						</article>
					))}
				</div>
			</section>

			<section className="grid gap-4">
				<h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
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

			<BookNowCta
				title="Ready to Start Your Wellness Journey?"
				description="Take the first step toward better health. Book your personalized consultation today and discover how naturopathic care can help you thrive."
				primaryButtonText="Book Your Consultation"
			/>

			<section id="contact" className="grid gap-4">
				<h2 className="text-2xl font-semibold">Send Us a Message</h2>
				<p className="text-muted-foreground">
					Have questions or prefer to reach out directly? Fill out the form
					below and we&apos;ll get back to you as soon as possible.
				</p>
				<ContactForm />
			</section>
		</section>
	);
}
