import type { Metadata } from "next";
import { symptoms } from "@/content/symptoms";
import { business } from "@/config/business";

export const metadata: Metadata = {
	title: `Conditions We Treat | ${business.businessName}`,
	description: `Naturopathic treatment for mood disorders, anxiety, ADHD, OCD, PTSD, eating disorders, autism spectrum, bipolar disorder, and other mental health conditions in Fort McMurray.`,
	openGraph: {
		title: `Mental Health Conditions We Treat | ${business.businessName}`,
		description: `Holistic naturopathic care for depression, anxiety, ADHD, trauma, and neurological conditions in Fort McMurray, Alberta.`,
	},
	twitter: {
		card: "summary_large_image",
		title: `Mental Health Conditions We Treat | ${business.businessName}`,
		description: `Holistic naturopathic care for depression, anxiety, ADHD, trauma, and neurological conditions in Fort McMurray, Alberta.`,
	},
};

export default function ConditionsPage() {
	return (
		<>
			<section>
				<h1 className="text-3xl font-semibold mb-6">Conditions We Treat</h1>
				<p className="text-muted-foreground mb-8">
					We provide comprehensive naturopathic care for a wide range of mental health and neurological conditions.
					Our approach addresses root causes through personalized treatment plans.
				</p>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{symptoms.map((symptom) => (
						<article key={symptom.slug} className="border rounded-lg p-5">
							<h2 className="text-xl font-semibold mb-2">{symptom.title}</h2>
							<p className="text-sm text-muted-foreground mb-3">
								{symptom.summary}
							</p>
							{symptom.details && (
								<p className="text-sm text-muted-foreground">
									{symptom.details}
								</p>
							)}
						</article>
					))}
				</div>
			</section>
		</>
	);
}
