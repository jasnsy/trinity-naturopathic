export type Symptom = {
	title: string;
	slug: string;
	summary: string;
	details?: string;
};

export const symptoms: Symptom[] = [
	{
		title: "Mood Disorders",
		slug: "mood-disorders",
		summary: "Depression, bipolar disorder, and mood dysregulation.",
		details:
			"We address mood disorders through personalized treatment plans combining botanical medicine, nutritional support, neurotransmitter balancing, and evidence-based naturopathic interventions.",
	},
	{
		title: "Anxiety Disorders",
		slug: "anxiety-disorders",
		summary: "Generalized anxiety, panic disorder, phobias, and OCD.",
		details:
			"Our approach addresses the root causes of anxiety through targeted botanical protocols, nutritional interventions, adrenal support, and integrative therapies designed to restore nervous system balance.",
	},
	{
		title: "Neurodevelopmental Disorders",
		slug: "neurodevelopmental-disorders",
		summary: "ADHD, autism spectrum, and developmental challenges.",
		details:
			"We provide comprehensive assessment and treatment plans addressing nutritional deficiencies, environmental factors, methylation pathways, and inflammatory processes that impact neurodevelopment.",
	},
	{
		title: "Neurodegenerative Conditions",
		slug: "neurodegenerative-conditions",
		summary: "Cognitive decline, dementia, and Parkinson's disease.",
		details:
			"Early intervention and ongoing support using evidence-based natural therapies to slow progression, support neurological function, and optimize quality of life in neurodegenerative conditions.",
	},
	{
		title: "Behavioral & Impulse Control Disorders",
		slug: "behavioral-impulse-disorders",
		summary: "Impulse control challenges and behavioral dysregulation.",
		details:
			"Addressing underlying biochemical imbalances, nutritional deficiencies, and inflammatory processes that contribute to impulse control and behavioral challenges through targeted naturopathic interventions.",
	},
	{
		title: "Trauma & Stressor-Related Disorders",
		slug: "trauma-stressor-disorders",
		summary: "PTSD, acute stress, and trauma-related conditions.",
		details:
			"Trauma-informed naturopathic care focusing on restoring physiological balance, supporting adrenal function, regulating cortisol patterns, and enhancing resilience through integrative therapies.",
	},
	{
		title: "Substance & Addiction Disorders",
		slug: "substance-addiction-disorders",
		summary: "Addiction recovery and substance use disorders.",
		details:
			"Supporting recovery through targeted nutrition, botanical medicine, amino acid therapy, and comprehensive protocols that address biochemical imbalances underlying addiction and support long-term sobriety.",
	},
	{
		title: "Neurological Conditions",
		slug: "neurological-conditions",
		summary: "Migraines, neuropathy, seizures, and other neurological concerns.",
		details:
			"Comprehensive naturopathic assessment and treatment addressing inflammation, mitochondrial function, nutritional status, and environmental triggers in various neurological conditions.",
	},
	{
		title: "Sleep Disorders",
		slug: "sleep-disorders",
		summary: "Insomnia, sleep apnea, and circadian rhythm disorders.",
		details:
			"Addressing sleep disturbances through evidence-based botanical medicine, nutritional support, hormone balancing, and lifestyle interventions to restore healthy sleep architecture.",
	},
	{
		title: "Eating Disorders",
		slug: "eating-disorders",
		summary: "Anorexia, bulimia, binge eating, and disordered eating patterns.",
		details:
			"Collaborative care addressing the physiological complications of eating disorders, supporting metabolic recovery, correcting nutritional deficiencies, and promoting healthy relationship with food.",
	},
	{
		title: "Personality Disorders",
		slug: "personality-disorders",
		summary: "Borderline, narcissistic, antisocial, and other personality patterns.",
		details:
			"Complementary naturopathic care addressing underlying biochemical factors, supporting emotional regulation, and optimizing neurological function in conjunction with psychological therapies.",
	},
];
