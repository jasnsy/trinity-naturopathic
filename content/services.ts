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
		title: "Naturopathic Medicine",
		slug: "naturopathic-medicine",
		summary: "Comprehensive holistic healthcare focusing on natural therapies and treating the root cause of illness.",
		features: [
			"Individualized treatment plans",
			"Natural and botanical medicine",
			"Preventative care approach",
			"Whole-person wellness",
		],
		details:
			"Naturopathic medicine combines traditional healing wisdom with modern medical science. We focus on identifying and treating the underlying causes of disease while supporting the body's inherent healing ability.",
	},
	{
		title: "BHRT Therapy",
		slug: "bhrt-therapy",
		summary: "Bio-identical Hormone Replacement Therapy to restore hormonal balance naturally.",
		features: [
			"Customized hormone protocols",
			"Bio-identical formulations",
			"Comprehensive testing",
			"Ongoing monitoring and adjustment",
		],
		details:
			"Bio-identical Hormone Replacement Therapy uses hormones that are molecularly identical to those your body produces. We create personalized treatment plans to address hormonal imbalances related to aging, menopause, andropause, and other conditions.",
	},
	{
		title: "Walsh Protocol",
		slug: "walsh-protocol",
		summary: "Advanced biochemical therapy for mental health based on individual chemistry.",
		features: [
			"Biochemical assessment",
			"Nutrient therapy protocols",
			"Methylation support",
			"Mental health optimization",
		],
		details:
			"The Walsh Protocol is a targeted nutritional approach that addresses biochemical imbalances underlying mental health conditions. Based on extensive testing, we identify specific nutrient deficiencies and methylation patterns to create personalized treatment plans.",
	},
	{
		title: "Hair Tissue Mineral Analysis",
		slug: "hair-tissue-mineral-analysis",
		summary: "Comprehensive mineral and heavy metal testing through hair analysis.",
		features: [
			"Heavy metal screening",
			"Mineral status assessment",
			"Metabolic insights",
			"Personalized supplementation plans",
		],
		details:
			"Hair Tissue Mineral Analysis provides a detailed picture of your mineral status, heavy metal burden, and metabolic patterns. This non-invasive test helps guide treatment for chronic fatigue, digestive issues, hormonal imbalances, and detoxification needs.",
	},
	{
		title: "Bioscan SRT",
		slug: "bioscan-srt",
		summary: "Non-invasive stress response testing to identify sensitivities and imbalances.",
		features: [
			"Food sensitivity testing",
			"Environmental stressor identification",
			"Energy balance assessment",
			"Immediate results",
		],
		details:
			"Bioscan SRT (Stress Response Testing) uses advanced technology to assess your body's stress responses to various substances including foods, environmental factors, and nutritional imbalances. Results guide personalized treatment strategies.",
	},
	{
		title: "Clinical Nutrition",
		slug: "clinical-nutrition",
		summary: "Evidence-based nutritional therapy to optimize health and treat disease.",
		features: [
			"Personalized meal planning",
			"Therapeutic diets",
			"Supplement protocols",
			"Nutritional deficiency correction",
		],
		details:
			"Clinical nutrition uses food as medicine to prevent and treat disease. We create individualized nutrition plans based on your unique needs, health goals, lab results, and dietary preferences to optimize digestion, energy, immunity, and overall wellness.",
	},
	{
		title: "Genetic Testing",
		slug: "genetic-testing",
		summary: "Advanced genetic analysis to personalize treatment and optimize health outcomes.",
		features: [
			"DNA analysis",
			"Methylation assessment",
			"Personalized medicine approach",
			"Disease risk evaluation",
		],
		details:
			"Genetic testing reveals important information about how your genes affect your health, metabolism, detoxification, and disease risk. We use this data to create precision medicine protocols tailored to your genetic blueprint.",
	},
	{
		title: "Courses",
		slug: "courses",
		summary: "Educational programs and workshops on natural health and wellness topics.",
		features: [
			"Expert-led instruction",
			"Practical health education",
			"Evidence-based content",
			"Ongoing support and resources",
		],
		details:
			"Our courses empower you with knowledge about natural health, nutrition, stress management, and holistic wellness. Learn practical strategies you can implement immediately to improve your health and wellbeing.",
	},
	{
		title: "Weight Loss Bootcamp",
		slug: "weight-loss-bootcamp",
		summary: "Intensive program combining nutrition, lifestyle changes, and accountability for sustainable weight loss.",
		features: [
			"Structured program format",
			"Group support and accountability",
			"Nutritional guidance",
			"Sustainable lifestyle strategies",
		],
		details:
			"Our Weight Loss Bootcamp is a comprehensive program that addresses the root causes of weight gain through personalized nutrition plans, metabolic support, hormonal balance, and lifestyle modification. Achieve lasting results with expert guidance and community support.",
	},
];
