export type TeamMember = {
	name: string;
	slug: string; // URL-friendly identifier for profile pages
	title: string;
	credentials?: string;
	shortBio: string;
	longBio: string;
	photo?: string; // Path to photo in /public/team/
	specialties?: string[];
	bookNowUrl: string; // URL for booking appointments
};

export const teamMembers: TeamMember[] = [
	{
		name: "Dr. Melanie Vicino, ND",
		slug: "dr-melanie-vicino",
		title: "Clinic Owner | Naturopathic Doctor",
		credentials: "ND",
		shortBio: `Dr. Melanie Vicino is a naturopathic doctor and founder of Trinity Naturopathic, specializing in complex neuropsychiatric and neurological conditions such as ADHD, Autism Spectrum Disorder, dysautonomia, and brain injury. She blends genetic-informed medicine with a holistic, faith-driven approach that supports each patient's unique biology and story. Passionate about neurodiversity and whole-person healing, Dr. Vicino brings warmth, compassion, and spiritual grounding to every interaction.`,
		longBio: `Meet Dr. Melanie Vicino, a passionate naturopathic doctor, clinic founder, and fierce advocate for neurodiversity. With a deep-rooted commitment to helping individuals thrive—body, mind, and spirit—Dr. Vicino specializes in complex neuropsychiatric and neurological conditions such as ADHD, Autism Spectrum Disorder (ASD), dysautonomia (including POTS and vagal nerve dysfunction), and traumatic brain injury. She is especially dedicated to supporting those whose needs are often overlooked in conventional care systems.

With a strong foundation in both Western and Eastern medicine, Dr. Vicino offers an integrative, personalized approach to healing. Her clinical work is grounded in genetic-informed medicine, which allows her to tailor treatment plans to each patient's unique biology, life story, and health goals. She brings together the science of naturopathic medicine with the heart of individualized care.

Dr. Vicino earned her Doctorate of Naturopathic Medicine from the Canadian College of Naturopathic Medicine (CCNM), where she completed a rigorous four-year medical program including a full clinical internship. Prior to this, she studied conventional medicine for 2.5 years at the Royal College of Surgeons in Bahrain (RCSI), and completed an Honours Bachelor's degree in Health Science with a focus in Biology at Western University in Ontario.

Beyond her clinical excellence, Dr. Vicino is known for her unwavering faith and devotion to Jesus. Her practice is inspired by a desire to see revival—in health, in spirit, and in community. She brings warmth, compassion, and prayerful intention to her work, creating a healing space where patients feel seen, heard, and empowered.

As the founder and visionary behind Trinity Naturopathic, Dr. Vicino has built a team of dedicated practitioners who share her values and holistic approach. She leads with integrity, clinical precision, and a heart for service, guiding patients through even the most complex health journeys with care and clarity.

Whether you're navigating neurodivergence, recovering from trauma, or seeking whole-person healing, Dr. Melanie Vicino offers the expertise, empathy, and spiritual grounding to help you reclaim your health and thrive.`,
		photo: "/team/melanie-profile.png",
		specialties: [
			"Neurodivergence",
			"Mental Health",
			"Hormone Conditions",
			"Digestive Health",
			"Weight Loss",
		],
		bookNowUrl: "https://trinitynaturopathic.janeapp.com/#/staff_member/1",
	},
	{
		name: "Colleen Cartier, NP",
		slug: "colleen-cartier",
		title: "Nurse Practitioner | BHRT & Integrative Women's Health Specialist",
		credentials: "NP",
		shortBio:
			"Colleen Cartier is an experienced Nurse Practitioner specializing in Bioidentical Hormone Replacement Therapy (BHRT) and integrative women's health. She helps individuals navigate perimenopause, menopause, and hormonal imbalances through evidence-based, personalized care. Known for her approachable nature and collaborative approach, Colleen empowers women to restore energy, balance, and vitality at every stage of life.",
		longBio: `Known for her approachable nature and thoughtful care, Colleen empowers her patients to take charge of their health. She believes in the body's innate ability to heal when given the right support and sees BHRT not just as symptom management, but as a pathway to restored energy, clarity, and quality of life.

As part of the Trinity Naturopathic team, Colleen works in close collaboration with our naturopathic doctors and other practitioners to deliver seamless, whole-person care. Her presence brings clinical excellence and heartfelt support to women at every stage of life.

Colleen Cartier is a highly skilled Nurse Practitioner with a passion for integrative and preventative medicine. At Trinity Naturopathic Clinic, she specializes in Bioidentical Hormone Replacement Therapy (BHRT) and women's health, providing compassionate, evidence-based care to individuals navigating perimenopause, menopause, hormonal imbalances, and chronic health concerns.

With years of clinical experience and a deep commitment to personalized care, Colleen takes the time to truly understand each patient's story, symptoms, and goals. Her approach blends the best of conventional and holistic medicine—offering thorough assessments, hormone testing, and tailored treatment plans that support long-term vitality and balance.
`,
		photo: "/team/colleen-profile.png",
		specialties: [
			"BHRT Therapy",
			"Hormone conditions",
			"Low Testosterone Treatment",
			"Menopause",
			"PCOS",
		],
		bookNowUrl: "https://trinitynaturopathic.janeapp.com/#/staff_member/7",
	},
	{
		name: "Yvonne Gilbert",
		slug: "yvonne-gilbert",
		title:
			"Registered Massage Therapist (RMT) | Fascial Stretch Therapy (FST) Specialist",
		credentials: "RMT",
		shortBio:
			"Yvonne Gilbert is a Registered Massage Therapist and certified Fascial Stretch Therapy (FST) practitioner with a trauma-informed, restorative approach to bodywork. She helps patients release tension, improve mobility, and reconnect with their bodies through therapeutic massage and assisted stretching. With a calming presence and intuitive skill, Yvonne supports lasting relief from pain, stress, and trauma.",
		longBio: `Yvonne Gilbert is a dedicated Registered Massage Therapist and certified Fascial Stretch Therapy (FST) practitioner who brings a deep, intuitive understanding of the body to her work at Trinity Naturopathic Clinic. With a strong focus on trauma-informed care and mobility restoration, Yvonne supports patients in releasing physical tension, improving flexibility, and reconnecting with their bodies in a safe and healing environment.

Her sessions combine the therapeutic benefits of massage with the dynamic, assisted stretching techniques of FST, a powerful modality that targets the fascia and joint capsules to increase range of motion, reduce pain, and enhance nervous system regulation. This approach is particularly effective for individuals recovering from stress, injury, or trauma.

Yvonne is known for her calming presence, skilled hands, and ability to meet each client where they are—whether they're dealing with chronic pain, emotional stress, postural issues, or the effects of stored trauma. She is passionate about helping people feel more at ease in their bodies and supporting lasting change through body-based therapy.

As part of the collaborative care team at Trinity Naturopathic, Yvonne plays a vital role in supporting physical, emotional, and neurological well-being. Her treatments not only relax the body—they help restore the whole person.`,
		photo: "/team/yvonne-profile.png",
		specialties: [
			"Fascial Stretch Therapy",
			"Massage Therapy",
			"Trauma Release",
			"Pain Management",
			"Stress Reduction",
			"Prenatal Massage",
			"Deep Tissue",
			"Arthritis",
			"Injury",
			"Rehabilitation",
		],
		bookNowUrl: "https://trinitynaturopathic.janeapp.com/#/staff_member/6",
	},
	{
		name: "Vanessa Zurfluh-Noseworthy",
		slug: "vanessa-noseworthy",
		title:
			"Herbalist | Hair Tissue Mineral Analysis (HTMA) Practitioner | Mineral Balancing Specialist",
		credentials: "",
		shortBio:
			"Vanessa Zurfluh-Noseworthy is an herbalist and Hair Tissue Mineral Analysis (HTMA) practitioner who specializes in mineral balancing and root-cause healing. Through detailed lab interpretation and customized protocols, she helps clients restore energy, mood, and hormonal balance using minerals, herbs, and nutrition. Her compassionate and empowering approach blends scientific insight with plant-based wisdom to support deep, lasting wellness.",
		longBio: `Vanessa Noseworthy is a skilled herbalist and Hair Tissue Mineral Analysis (HTMA) practitioner who brings a deep understanding of mineral balance and plant-based medicine to her role at Trinity Naturopathic Clinic. With a passion for root-cause healing, Vanessa specializes in interpreting HTMA lab reports to uncover hidden patterns of stress, toxicity, and nutrient imbalance that often go overlooked in conventional testing.

Through her detailed assessments and customized protocols, Vanessa helps patients rebalance their mineral systems—supporting energy, mood, digestion, hormone health, and nervous system regulation. She works closely with individuals to design practical, nourishing plans that include targeted mineral supplementation, herbal support, and lifestyle guidance.

Vanessa's approach is highly personalized, compassionate, and empowering. She believes the body tells a story through its chemistry and is committed to helping patients understand that story so they can take meaningful steps toward healing. Her unique combination of scientific insight and herbal wisdom makes her an integral part of the Trinity Naturopathic team.

Whether supporting clients with burnout, chronic fatigue, anxiety, or long-standing imbalances, Vanessa offers the clarity and guidance needed to restore vitality from the inside out.`,
		photo: "/team/vanessa-profile.png",
		specialties: [
			"Fatigue",
			"Mold",
			"Autoimmune",
			"Post-Partum",
			"Digestive Health",
			"Mental Health",
		],
		bookNowUrl: "https://trinitynaturopathic.janeapp.com/#/staff_member/3",
	},
];

export const ourStory = `
At Trinity Naturopathic Clinic, our story began with a deep commitment to compassionate, holistic care. Founded by Dr. Melanie Vicino, a dedicated and experienced naturopathic doctor, the clinic was originally established in response to the growing need for integrative support for neuropsychiatric conditions such as ADHD, autism, anxiety, and depression. Dr. Vicino recognized the profound impact these challenges have on individuals and families, and she envisioned a clinic that could truly meet people where they are—mind, body, and spirit.

Over time, our services have evolved to reflect the diverse and interconnected needs of our patients. In addition to individualized naturopathic care, we now offer massage therapy, Fascial Stretch Therapy (FST) for mobility & trauma release, and Bioidentical Hormone Replacement Therapy (BHRT), allowing us to address a broader range of health concerns while still staying true to our core philosophy.

Our team of skilled and compassionate practitioners works collaboratively to provide comprehensive, personalized care. Whether supporting someone on their neurodivergent journey, helping a patient process stored trauma through body-based therapies, or addressing hormonal imbalances, we tailor each treatment plan to reflect the uniqueness of every individual.

At Trinity Naturopathic, we believe in moving beyond symptom management. We are here to empower our patients—through education, support, and evidence-informed therapies—to better understand themselves and their bodies. By addressing root causes and supporting whole-person healing, we walk alongside our patients as they reclaim their health and well-being.

We’re more than a clinic—we’re a healing community. Our mission is to support and inspire individuals and families as they navigate neurodivergence, trauma, and hormonal transitions, creating a space where everyone is seen, heard, and empowered to thrive.
`;
