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
	fax?: string;
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
	businessName: "Trinity Naturopathic",
	tagline: "Holistic Mental Health & Wellness Care in Fort McMurray",
	phone: "+1 (587) 644-6656",
	fax: "+1 (587) 701-5263",
	email: "info@trinitynaturopathic.com",
	bookingUrl: undefined,
	address: {
		line1: "123 Main St",
		city: "Fort McMurray",
		state: "AB",
		postalCode: "T9H 3G3",
		country: "Canada",
	},
	serviceAreas: [
		"Abasand Heights",
		"Beacon Hill",
		"Dickinsfield",
		"Downtown",
		"Eagle Ridge",
		"Grayling Terrace",
		"Gregoire",
		"Parsons Creek",
		"Prairie Creek",
		"Saline Creek",
		"Stone Creek",
		"Thickwood Heights",
		"Timberlea",
		"Waterways",
		"Wood Buffalo",
	],
	hours: [
		{ day: "Monday", open: "10:00", close: "18:00" },
		{ day: "Tuesday", open: "10:00", close: "18:00" },
		{ day: "Wednesday", open: "10:00", close: "18:00" },
		{ day: "Thursday", open: "10:00", close: "17:00" },
		{ day: "Friday", open: "11:00", close: "17:00" },
		{ day: "Saturday", open: "10:00", close: "16:00" },
	],
	licenseNumber: "ND-FMMC-2025",
	insuranceCarrier: "Professional Liability Insurance Corp.",
	googleMapsPlaceId: undefined,
	logo: {
		light: "/trinity-logo-light.webp",
		dark: "/trinity-logo-dark.webp",
		alt: "Trinity Naturopathic Logo",
	},
	social: {
		facebook: "https://facebook.com/trinitynaturopathic",
		instagram: "https://instagram.com/trinitynaturopathic",
	},
	theme: { brandColor: "#8FAE93", accentColor: "#61714D", radius: 0.625 },
};
