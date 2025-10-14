import { symptoms } from "@/content/symptoms";

export default function ConditionsPage() {
	return (
		<>
			<section>
				<h2 className="text-3xl font-semibold mb-6">Conditions We Treat</h2>
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
