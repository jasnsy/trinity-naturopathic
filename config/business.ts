export type BusinessHours = {
	day: string;
	open: string;
	close: string;
};

export type SocialLinks = {
	facebook?: string;
	instagram?: string;
	tiktok?: string;
	youtube?: string;
	linkedin?: string;
};

export type Address = {
	line1: string;
	line2?: string;
	city: string;
	state: string; // province for CA
	postalCode: string;
	country: string;
};

export type BusinessConfig = {
	businessName: string;
	tagline: string;
	phone: string;
	email: string;
	bookingUrl?: string;
	address: Address;
	serviceAreas: string[];
	hours: BusinessHours[];
	licenseNumber?: string;
	insuranceCarrier?: string;
	googleMapsPlaceId?: string;
	logo: { light: string; dark: string; alt: string };
	social: SocialLinks;
	theme: {
		brandColor: string; // primary
		accentColor: string; // secondary
		radius: number; // rem units
	};
};

export const business: BusinessConfig = {
	businessName: "Acme Inc.",
	tagline: "Reliable Plumbing Services in Calgary",
	phone: "+1 (403) 555-0123",
	email: "hello@acmeinc.example",
	bookingUrl: undefined,
	address: {
		line1: "123 Main St",
		city: "Calgary",
		state: "AB",
		postalCode: "T2P 0L4",
		country: "Canada",
	},
	serviceAreas: ["Calgary", "Airdrie", "Chestermere"],
	hours: [
		{ day: "Mon-Fri", open: "08:00", close: "18:00" },
		{ day: "Sat", open: "09:00", close: "14:00" },
	],
	licenseNumber: "PL-ACME-2025",
	insuranceCarrier: "Prairie Insurance Co.",
	googleMapsPlaceId: undefined,
	logo: {
		light: "/logo-light.svg",
		dark: "/logo-dark.svg",
		alt: "Acme Inc. Logo",
	},
	social: {
		facebook: "https://facebook.com/acmeinc",
		instagram: "https://instagram.com/acmeinc",
	},
	theme: { brandColor: "#0ea5e9", accentColor: "#f59e0b", radius: 0.5 },
};
