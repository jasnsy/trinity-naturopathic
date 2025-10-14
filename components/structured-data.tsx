import { business } from "@/config/business";

export function StructuredData() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "MedicalBusiness",
		"@id": process.env.NEXT_PUBLIC_SITE_URL || "https://trinitynaturopathic.ca",
		name: business.businessName,
		image: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/trinity-logo-light.webp`,
		description: business.tagline,
		url: process.env.NEXT_PUBLIC_SITE_URL || "https://trinitynaturopathic.ca",
		telephone: business.phone,
		email: business.email,
		address: {
			"@type": "PostalAddress",
			streetAddress: business.address.line1,
			addressLocality: business.address.city,
			addressRegion: business.address.state,
			postalCode: business.address.postalCode,
			addressCountry: business.address.country,
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 56.7267,
			longitude: -111.3790,
		},
		openingHoursSpecification: business.hours.map((h) => ({
			"@type": "OpeningHoursSpecification",
			dayOfWeek: h.day.includes("-")
				? h.day.split("-").map((d) => d.trim())
				: h.day,
			opens: h.open,
			closes: h.close,
		})),
		priceRange: "$$",
		areaServed: {
			"@type": "City",
			name: "Fort McMurray",
			address: {
				"@type": "PostalAddress",
				addressRegion: "AB",
				addressCountry: "Canada",
			},
		},
		medicalSpecialty: [
			"Naturopathic Medicine",
			"Mental Health",
			"Integrative Medicine",
		],
		...(business.social.facebook && {
			sameAs: [
				business.social.facebook,
				...(business.social.instagram ? [business.social.instagram] : []),
			],
		}),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}
