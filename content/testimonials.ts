export type Testimonial = {
	name: string;
	content: string;
	location?: string;
	rating?: number;
};

export const testimonials: Testimonial[] = [
	{
		name: "Jordan P.",
		content:
			"Acme fixed our burst pipe within hours. Professional, quick, and fair pricing.",
		location: "Calgary, AB",
		rating: 5,
	},
	{
		name: "Samantha L.",
		content:
			"They installed our tankless heater seamlessly. Highly recommend Acme!",
		location: "Airdrie, AB",
		rating: 5,
	},
];
