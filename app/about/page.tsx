import { business } from "@/config/business";

export default function AboutPage() {
	return (
		<section className="space-y-4">
			<h1 className="text-3xl font-semibold">About {business.businessName}</h1>
			<p className="text-muted-foreground">
				{business.businessName} is a specialized naturopathic clinic serving Fort McMurray
				and the Regional Municipality of Wood Buffalo. We focus on integrative mental health
				care, neurological conditions, and holistic wellness using evidence-based natural medicine.
				Our approach combines modern scientific understanding with traditional naturopathic
				principles to address the root causes of health challenges.
			</p>
			<p className="text-muted-foreground">
				We understand that mental health and neurological conditions affect the whole person—body,
				mind, and spirit. Our practitioners work collaboratively with conventional healthcare
				providers to deliver comprehensive, patient-centered care that respects your unique
				health journey and treatment preferences.
			</p>
			<ul className="list-disc pl-5">
				<li>Licensed Naturopathic Doctors (ND)</li>
				<li>Specialized training in mental health & neurology</li>
				<li>Evidence-based botanical medicine & clinical nutrition</li>
				<li>Integrative approach working alongside conventional care</li>
				<li>Personalized treatment plans for complex conditions</li>
				<li>Serving all Fort McMurray communities</li>
			</ul>
		</section>
	);
}
