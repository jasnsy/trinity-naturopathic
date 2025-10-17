import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { business } from "@/config/business";
import { teamMembers } from "@/content/team";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return teamMembers.map((member) => ({
		slug: member.slug,
	}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const member = teamMembers.find((m) => m.slug === slug);

	if (!member) {
		return {
			title: "Team Member Not Found",
		};
	}

	return {
		title: `${member.name} | ${business.businessName}`,
		description: member.shortBio,
		openGraph: {
			title: `${member.name} - ${member.title}`,
			description: member.shortBio,
			type: "profile",
		},
		twitter: {
			card: "summary_large_image",
			title: `${member.name} - ${member.title}`,
			description: member.shortBio,
		},
	};
}

export default async function TeamMemberPage({ params }: Props) {
	const { slug } = await params;
	const member = teamMembers.find((m) => m.slug === slug);

	if (!member) {
		notFound();
	}

	return (
		<div className="space-y-8">
			<div className="flex items-center gap-4">
				<Button asChild variant="ghost" size="sm">
					<Link href="/about" className="flex items-center gap-2">
						<ArrowLeft className="h-4 w-4" />
						Back to Team
					</Link>
				</Button>
			</div>

			<div className="grid gap-8 lg:grid-cols-3">
				<div className="lg:col-span-1">
					<div className="sticky top-8 space-y-6">
						{member.photo && (
							<div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-muted">
								<Image
									src={member.photo}
									alt={member.name}
									fill
									className="object-cover"
									priority
								/>
							</div>
						)}
						<div className="space-y-4">
							<Button asChild className="w-full" size="lg">
								<Link
									href={member.bookNowUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									Book Now
								</Link>
							</Button>
							{member.specialties && member.specialties.length > 0 && (
								<div className="space-y-2">
									<h3 className="text-sm font-semibold">Specialties</h3>
									<div className="flex flex-wrap gap-2">
										{member.specialties.map((specialty) => (
											<Badge key={specialty} variant="secondary">
												{specialty}
											</Badge>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="lg:col-span-2 space-y-6">
					<div className="space-y-2">
						<h1 className="text-3xl font-semibold md:text-4xl">
							{member.name}
						</h1>
						<p className="text-lg text-muted-foreground">{member.title}</p>
					</div>

					<div className="space-y-4">
						{member.longBio.split("\n\n").map(
							(paragraph, idx) =>
								paragraph.trim() && (
									<p
										key={idx}
										className="text-muted-foreground leading-relaxed text-base"
									>
										{paragraph.trim()}
									</p>
								)
						)}
					</div>

					<div className="pt-4 border-t">
						<Button asChild size="lg">
							<Link
								href={member.bookNowUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								Schedule an Appointment
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
