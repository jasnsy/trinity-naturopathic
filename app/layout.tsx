import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { business } from "@/config/business";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
// moved ThemeToggle into SiteHeader
import { Analytics } from "@vercel/analytics/react";

const appSans = Plus_Jakarta_Sans({
	variable: "--font-app-sans",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

const appMono = JetBrains_Mono({
	variable: "--font-app-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: `${business.businessName} — ${business.tagline}`,
	description: `Licensed naturopathic doctors in Fort McMurray specializing in mental health, BHRT therapy, Walsh Protocol, and integrative wellness care. Evidence-based natural medicine for depression, anxiety, ADHD, and neurological conditions.`,
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
	),
	keywords: [
		"naturopathic doctor Fort McMurray",
		"mental health naturopath",
		"BHRT therapy Alberta",
		"Walsh Protocol Fort McMurray",
		"anxiety treatment natural",
		"depression naturopathic care",
		"ADHD natural treatment",
		"integrative medicine Fort McMurray",
	],
	openGraph: {
		title: `${business.businessName} — ${business.tagline}`,
		description: `Licensed naturopathic doctors specializing in mental health and integrative wellness in Fort McMurray. Natural treatment for depression, anxiety, ADHD, and neurological conditions.`,
		url: "/",
		siteName: business.businessName,
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: business.businessName,
			},
		],
		locale: "en_CA",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: `${business.businessName} — ${business.tagline}`,
		description: `Licensed naturopathic doctors specializing in mental health and integrative wellness in Fort McMurray.`,
		images: ["/og-image.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const styleVars = {
		// brand and accent css variables
		"--primary": business.theme.brandColor,
		"--secondary": business.theme.accentColor,
		"--radius": `${business.theme.radius}rem`,
	} as React.CSSProperties;
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<StructuredData />
			</head>
			<body
				className={`${appSans.variable} ${appMono.variable} antialiased`}
				style={styleVars}
			>
				<ThemeProvider>
					<SiteHeader />
					<div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
					<SiteFooter />
					{process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true" && <Analytics />}
				</ThemeProvider>
			</body>
		</html>
	);
}
