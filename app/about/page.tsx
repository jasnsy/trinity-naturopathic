import { business } from "@/config/business";

export default function AboutPage() {
	return (
		<section className="space-y-4">
			<h1 className="text-3xl font-semibold">About {business.businessName}</h1>
			<p className="text-muted-foreground">
				{business.businessName} provides trusted plumbing services across
				Calgary and nearby areas. Our licensed technicians deliver quality
				workmanship with transparent pricing.
			</p>
			<ul className="list-disc pl-5">
				<li>Licensed & insured</li>
				<li>Over 10 years of experience</li>
				<li>Emergency services available</li>
			</ul>
		</section>
	);
}
