"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/config/business";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/services", label: "Services" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
	{ href: "/location", label: "Location" },
];

export const SiteHeader: React.FC = () => {
	const pathname = usePathname();
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Sheet>
						<SheetTrigger asChild>
							<button
								className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent"
								aria-label="Open menu"
							>
								<Menu className="h-5 w-5" />
							</button>
						</SheetTrigger>
						<SheetContent side="left" className="w-80">
							<SheetHeader className="sr-only">
								<SheetTitle>Menu</SheetTitle>
							</SheetHeader>
							<nav className="mt-2 grid" aria-label="Mobile navigation">
								{links.map((l) => (
									<SheetClose asChild key={l.href}>
										<Link
											href={l.href}
											className="block px-2 py-3 text-lg rounded-md hover:bg-accent"
										>
											{l.label}
										</Link>
									</SheetClose>
								))}
							</nav>
							<div className="mt-4 grid gap-2">
								<Button asChild size="sm" className="w-full">
									<a href="/contact" aria-label="Book online from menu">
										Book Online
									</a>
								</Button>
								<Button asChild variant="outline" size="sm" className="w-full">
									<a href={`tel:${business.phone.replace(/[^+\\d]/g, "")}`}>
										Call {business.phone}
									</a>
								</Button>
							</div>
						</SheetContent>
					</Sheet>
					<Link
						href="/"
						className="flex items-center gap-2"
						aria-label="Go to home"
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={business.logo.light}
							alt={business.logo.alt}
							className="h-7 w-auto dark:hidden"
						/>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={business.logo.dark}
							alt={business.logo.alt}
							className="h-7 w-auto hidden dark:block"
						/>
						<span className="sr-only">{business.businessName}</span>
					</Link>
				</div>
				<nav
					aria-label="Main navigation"
					className="hidden md:flex items-center gap-6"
				>
					{links.map((l) => (
						<Link
							key={l.href}
							href={l.href}
							className={`text-sm hover:underline underline-offset-4 ${
								pathname === l.href ? "font-semibold" : "text-muted-foreground"
							}`}
						>
							{l.label}
						</Link>
					))}
				</nav>
				<div className="flex items-center gap-2">
					<Button asChild variant="default">
						<a
							href={`tel:${business.phone.replace(/[^+\d]/g, "")}`}
							aria-label={`Call ${business.businessName}`}
							className="inline-flex items-center gap-2"
						>
							<Phone className="h-4 w-4" />
							<span className="hidden md:inline">{business.phone}</span>
							<span className="md:hidden inline">Call</span>
						</a>
					</Button>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};
