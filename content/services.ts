export type Service = {
	title: string;
	slug: string;
	summary: string;
	features: string[];
	startingPrice?: string;
	image?: string;
	faqs?: { question: string; answer: string }[];
	details?: string;
};

export const services: Service[] = [
	{
		title: "Emergency Plumbing",
		slug: "emergency-plumbing",
		summary: "24/7 rapid response for leaks, clogs, and bursts.",
		features: [
			"Rapid on-site arrival",
			"Licensed & insured",
			"Upfront pricing",
		],
		startingPrice: "$149",
		image: "/photos/work-1.webp",
		details:
			"We diagnose and resolve urgent leaks, clogs, and failures quickly to limit damage and restore service with durable, code‑compliant repairs.",
	},
	{
		title: "Drain Cleaning",
		slug: "drain-cleaning",
		summary: "Effective clearing for sinks, tubs, and main lines.",
		features: ["Camera inspection", "Root removal", "Odor prevention"],
		startingPrice: "$129",
		image: "/photos/work-2.webp",
		details:
			"From hair and grease to root intrusion, we clear the blockage, inspect the line, and provide recommendations to prevent repeat issues.",
	},
	{
		title: "Water Heater Install",
		slug: "water-heater-install",
		summary: "Efficient tank and tankless installations.",
		features: [
			"Energy-efficient models",
			"Old unit disposal",
			"Warranty-backed",
		],
		startingPrice: "$899",
		image: "/photos/work-3.webp",
		details:
			"Right‑sized tank and tankless installations, proper venting and gas sizing, and optional softening/descaling for long‑term performance.",
	},
];
