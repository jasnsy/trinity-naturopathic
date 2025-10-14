import { business } from "@/config/business";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const points: string[] = [
	"Licensed Naturopathic Doctors",
	"Evidence-Based Natural Medicine",
	"Personalized Treatment Plans",
	"Mental Health & Neurological Focus",
	"Compassionate, Holistic Care",
];

export const Hero: React.FC = () => {
	return (
		<section className="relative overflow-hidden rounded-xl border bg-gradient-to-b from-primary/15 via-accent/10 to-transparent p-6 sm:p-10">
			<div className="max-w-3xl">
				<div className="flex items-center gap-3 mb-4">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={business.logo.light}
						alt={business.logo.alt}
						className="h-8 w-auto dark:hidden"
					/>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={business.logo.dark}
						alt={business.logo.alt}
						className="h-8 w-auto hidden dark:block"
					/>
					<span className="text-sm text-muted-foreground">
						{business.businessName}
					</span>
				</div>
				<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
					{business.tagline}
				</h1>
				<p className="mt-3 text-lg text-muted-foreground">
					Comprehensive naturopathic care for mental health, neurological conditions,
					and holistic wellness in Fort McMurray. We treat the root cause, not just symptoms.
				</p>
				<ul className="mt-6 grid gap-2 text-base">
					{points.map((p) => (
						<li key={p} className="flex items-start gap-2">
							<CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
							<span>{p}</span>
						</li>
					))}
				</ul>
				<div className="mt-8">
					<Button asChild size="lg" className="text-base">
						<a href="#contact" aria-label="Book appointment now via contact form">
							Book Appointment
						</a>
					</Button>
				</div>
			</div>
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background:radial-gradient(60%_50%_at_50%_0%,theme(colors.primary/.2),transparent_70%)]" />
		</section>
	);
};
