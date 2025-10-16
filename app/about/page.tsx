import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/config/business";
import { teamMembers, ourStory } from "@/content/team";

export const metadata: Metadata = {
	title: `About Us | ${business.businessName}`,
	description: `Licensed naturopathic doctors specializing in integrative mental health care and neurological conditions in Fort McMurray. Evidence-based natural medicine working alongside conventional care.`,
	openGraph: {
		title: `About ${business.businessName}`,
		description: `Specialized naturopathic clinic serving Fort McMurray with integrative mental health care and holistic wellness using evidence-based natural medicine.`,
	},
	twitter: {
		card: "summary",
		title: `About ${business.businessName}`,
		description: `Specialized naturopathic clinic serving Fort McMurray with integrative mental health care and holistic wellness using evidence-based natural medicine.`,
	},
};

export default function AboutPage() {
	return (
		<div className="space-y-12">
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

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Our Story</h2>
				<div className="text-muted-foreground space-y-4">
					{ourStory.split('\n\n').map((paragraph, idx) => (
						paragraph.trim() && <p key={idx}>{paragraph.trim()}</p>
					))}
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Our Team</h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{teamMembers.map((member) => (
						<article key={member.name} className="border rounded-lg overflow-hidden">
							{member.photo && (
								<div className="relative w-full h-64 bg-muted">
									<Image
										src={member.photo}
										alt={member.name}
										fill
										className="object-cover"
									/>
								</div>
							)}
							<div className="p-4 space-y-2">
								<h3 className="text-xl font-semibold">{member.name}</h3>
								<p className="text-sm font-medium text-muted-foreground">
									{member.title}
									{member.credentials && `, ${member.credentials}`}
								</p>
								<p className="text-sm text-muted-foreground">{member.bio}</p>
								{member.specialties && member.specialties.length > 0 && (
									<div className="pt-2">
										<p className="text-xs font-semibold mb-1">Specialties:</p>
										<div className="flex flex-wrap gap-1">
											{member.specialties.map((specialty) => (
												<span
													key={specialty}
													className="text-xs px-2 py-1 bg-muted rounded"
												>
													{specialty}
												</span>
											))}
										</div>
									</div>
								)}
							</div>
						</article>
					))}
				</div>
			</section>
		</div>
	);
}
