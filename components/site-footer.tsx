import Link from "next/link";
import { business } from "@/config/business";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export const SiteFooter: React.FC = () => {
	return (
		<footer className="border-t mt-12">
			<div className="mx-auto max-w-6xl px-4 py-10 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-left">
				<div className="space-y-2">
					<h3 className="font-semibold">{business.businessName}</h3>
					<p className="text-sm text-muted-foreground">{business.tagline}</p>
					<p className="text-sm">
						{business.address.line1}, {business.address.city},{" "}
						{business.address.state} {business.address.postalCode}
					</p>
				</div>
				<div className="text-sm">
					<h4 className="font-semibold mb-2">Follow</h4>
					<div className="flex items-center gap-3">
						{business.social.facebook && (
							<a
								href={business.social.facebook}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
								className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-accent"
							>
								<Facebook className="h-4 w-4" />
								<span className="sr-only">Facebook</span>
							</a>
						)}
						{business.social.instagram && (
							<a
								href={business.social.instagram}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-accent"
							>
								<Instagram className="h-4 w-4" />
								<span className="sr-only">Instagram</span>
							</a>
						)}
						{business.social.youtube && (
							<a
								href={business.social.youtube}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="YouTube"
								className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-accent"
							>
								<Youtube className="h-4 w-4" />
								<span className="sr-only">YouTube</span>
							</a>
						)}
						{business.social.linkedin && (
							<a
								href={business.social.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-accent"
							>
								<Linkedin className="h-4 w-4" />
								<span className="sr-only">LinkedIn</span>
							</a>
						)}
						{/* TikTok icon not available in lucide-react under this name by default; omit if absent */}
					</div>
				</div>
				<nav className="grid gap-2 text-sm" aria-label="Footer">
					<Link href="/">Home</Link>
					<Link href="/services">Services</Link>
					<Link href="/about">About</Link>
					<Link href="/location">Location</Link>
					<Link href="/contact">Contact</Link>
				</nav>
				<div className="text-sm space-y-2">
					<p>
						Phone:{" "}
						<a
							className="underline underline-offset-4"
							href={`tel:${business.phone.replace(/[^+\d]/g, "")}`}
						>
							{business.phone}
						</a>
					</p>
					<p>
						Email:{" "}
						<a
							className="underline underline-offset-4"
							href={`mailto:${business.email}`}
						>
							{business.email}
						</a>
					</p>
					<p className="text-muted-foreground mt-2">
						© {new Date().getFullYear()} {business.businessName}. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
