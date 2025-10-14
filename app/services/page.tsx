import Image from "next/image";
import type { Metadata } from "next";
import { services } from "@/content/services";
import { business } from "@/config/business";

export const metadata: Metadata = {
	title: `Services | ${business.businessName}`,
	description: `Comprehensive naturopathic services in Fort McMurray including BHRT Therapy, Walsh Protocol, Hair Tissue Mineral Analysis, Bioscan SRT, Clinical Nutrition, and Genetic Testing for mental health and wellness.`,
	openGraph: {
		title: `Our Services | ${business.businessName}`,
		description: `Evidence-based naturopathic therapies for mental health, hormone balance, and neurological wellness in Fort McMurray.`,
	},
	twitter: {
		card: "summary_large_image",
		title: `Our Services | ${business.businessName}`,
		description: `Evidence-based naturopathic therapies for mental health, hormone balance, and neurological wellness in Fort McMurray.`,
	},
};

export default function ServicesPage() {
	return (
		<section>
			<h1 className="text-3xl font-semibold mb-6">Services</h1>
			<p className="text-muted-foreground mb-8">
				We offer a comprehensive range of evidence-based naturopathic services and therapies designed to
				address your unique health needs. From advanced diagnostic testing to personalized treatment protocols,
				our services integrate traditional healing wisdom with modern medical science to support your journey
				toward optimal health and wellness.
			</p>
			<div className="grid gap-6 sm:grid-cols-2">
				{services.map((s) => (
					<article key={s.slug} className="border rounded-lg overflow-hidden">
						{s.image && (
							<div className="relative w-full h-40 bg-muted">
								<Image
									src={s.image}
									alt={s.title}
									fill
									className="object-cover"
								/>
							</div>
						)}
						<div className="p-4">
							<h2 className="text-xl font-semibold">{s.title}</h2>
							<p className="text-sm text-muted-foreground mt-1">{s.summary}</p>
							{s.startingPrice && (
								<p className="mt-2 text-sm">
									<span className="font-medium">Starting at:</span>{" "}
									{s.startingPrice}
								</p>
							)}
							<ul className="mt-3 list-disc pl-5 text-sm">
								{s.features.map((f) => (
									<li key={f}>{f}</li>
								))}
							</ul>
							{s.details && (
								<p className="mt-3 text-sm text-muted-foreground">
									{s.details}
								</p>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
