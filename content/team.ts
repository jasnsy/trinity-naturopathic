export type TeamMember = {
	name: string;
	title: string;
	credentials?: string;
	bio: string;
	photo?: string; // Path to photo in /public/team/
	specialties?: string[];
};

export const teamMembers: TeamMember[] = [
	{
		name: "Dr. [Name]",
		title: "Naturopathic Doctor",
		credentials: "ND",
		bio: "Add bio here describing education, experience, and approach to naturopathic medicine.",
		photo: "/team/placeholder.jpg", // Replace with actual photo filename
		specialties: [
			"Mental Health",
			"BHRT Therapy",
			"Clinical Nutrition",
		],
	},
	// Add more team members as needed
];

export const ourStory = `
Trinity Naturopathic was founded with a vision to bring comprehensive, integrative mental health care to Fort McMurray and the surrounding communities. Our clinic was born from the recognition that the unique challenges of living and working in northern Alberta—from demanding work schedules and shift work to limited access to specialized mental health services—require a different approach to healthcare.

We believe that true healing addresses the whole person: body, mind, and spirit. Our practice combines the wisdom of traditional naturopathic medicine with cutting-edge diagnostic tools and treatment protocols. From Bio-Identical Hormone Replacement Therapy to the Walsh Protocol, Hair Tissue Mineral Analysis to Bioscan SRT, we offer evidence-based natural therapies that work alongside conventional care to support your journey toward optimal wellness.

Located in the heart of Fort McMurray, we serve individuals and families across all neighborhoods and surrounding areas. Whether you're struggling with mood disorders, anxiety, ADHD, trauma, or other mental health challenges, our team is committed to providing compassionate, personalized care that respects your unique health journey and treatment preferences.
`;
