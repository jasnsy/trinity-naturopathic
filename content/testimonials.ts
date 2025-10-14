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
			"Trinity Naturopathic helped me manage my anxiety with natural therapies. Professional, compassionate, and effective.",
		location: "Fort McMurray, AB",
		rating: 5,
	},
	{
		name: "Samantha L.",
		content:
			"Dr. Melanie helped me find relief from chronic migraines. Her holistic approach made all the difference!",
		location: "Fort McMurray, AB",
		rating: 5,
	},
];
