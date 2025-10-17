import type { Metadata } from "next";
import { business } from "@/config/business";
import { ServiceAreaMap } from "@/components/service-area-map";
import { BookNowCta } from "@/components/book-now-cta";

export const metadata: Metadata = {
	title: `Service Area | ${business.businessName}`,
	description: `Serving Fort McMurray and surrounding communities including Abasand Heights, Thickwood Heights, Timberlea, Waterways, Anzac, and Fort McKay with naturopathic mental health care.`,
	openGraph: {
		title: `Service Area - Fort McMurray | ${business.businessName}`,
		description: `Naturopathic mental health services across Fort McMurray neighborhoods and surrounding areas in the Regional Municipality of Wood Buffalo.`,
	},
	twitter: {
		card: "summary",
		title: `Service Area - Fort McMurray | ${business.businessName}`,
		description: `Naturopathic mental health services across Fort McMurray neighborhoods and surrounding areas in the Regional Municipality of Wood Buffalo.`,
	},
};

// Approximate polygon encompassing Fort McMurray and surrounding area
const fortMcMurrayPolygon: [number, number][] = [
	[57.05, -111.85], // North
	[57.05, -110.95], // Northeast
	[56.95, -110.75], // East near Fort McKay
	[56.75, -110.6], // Southeast
	[56.55, -110.7], // South-southeast near Conklin
	[56.35, -111.1], // South near Janvier
	[56.3, -111.5], // Southwest
	[56.4, -111.8], // West-southwest near Anzac
	[56.6, -111.95], // West
	[56.8, -111.95], // Northwest
	[57.05, -111.85], // Back to north
];

const fortMcMurrayCommunities: string[] = [
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
	"Lower Townsite",
	"MacDonald Island",
	"Draper",
];

const nearbyAreas: string[] = [
	"Anzac",
	"Janvier",
	"Conklin",
	"Fort McKay",
	"Gregoire Lake Estates",
	"Saprae Creek",
];

export default function LocationPage() {
	return (
		<section className="space-y-8">
			<div className="space-y-3">
				<h1 className="text-3xl font-semibold">Service Area</h1>
				<div className="prose prose-invert max-w-none text-foreground">
					<p>
						Fort McMurray, Alberta is located in the heart of the Athabasca Oil
						Sands region in northeastern Alberta. With a population of
						approximately 80,000 in the urban service area, Fort McMurray serves
						as the economic hub of the Regional Municipality of Wood Buffalo.
						The community is known for its diverse, transient population working
						in resource industries, shift work culture, and resilient spirit
						demonstrated through the 2016 wildfire recovery. From Thickwood
						Heights and Timberlea to Waterways and Downtown, residents face
						unique health challenges related to isolation, demanding work
						schedules, and limited access to specialized healthcare services.
					</p>
					<br />
					<p>
						Fort McMurray&apos;s remote location and resource-based economy
						create specific mental health considerations. Long work hours, shift
						work disrupting circadian rhythms, extended time away from family,
						social isolation, and limited daylight during winter months
						contribute to higher rates of depression, anxiety, substance use,
						and burnout. The 2016 wildfire left lasting impacts on community
						mental health, with many residents experiencing trauma, grief, and
						ongoing stress. Access to specialized mental health services remains
						limited, with long wait times for psychiatric care and few
						practitioners offering integrative treatment approaches.
					</p>
					<br />
					<p>
						From a naturopathic perspective, we routinely address: mood
						disorders exacerbated by vitamin D deficiency from limited winter
						sunlight; anxiety and sleep disturbances related to shift work and
						circadian disruption; ADHD symptoms in both children and adults
						seeking non-pharmaceutical options; substance use and addiction
						recovery support; trauma and PTSD following community disasters;
						chronic stress and burnout from demanding work schedules; and
						neurological symptoms including migraines, brain fog, and cognitive
						concerns. We also provide preventative care addressing nutritional
						deficiencies common in northern climates, gut health optimization,
						and resilience-building strategies for individuals working in
						high-stress environments.
					</p>
					<br />
					<p>
						Whether you live in Abasand Heights, Beacon Hill, Parsons Creek, or
						one of the rural hamlets, we deliver personalized naturopathic care
						that respects your unique circumstances, work schedule, and health
						goals. We understand the challenges of accessing healthcare in a
						remote community and work to provide comprehensive, evidence-based
						natural medicine that complements conventional care. Our team offers
						compassionate, non-judgmental support for mental health and
						neurological conditions, helping Fort McMurray residents achieve
						optimal wellness despite the region&apos;s unique challenges.
					</p>
				</div>
				<p className="text-muted-foreground">
					We proudly serve Fort McMurray and surrounding communities including{" "}
					{business.serviceAreas.join(", ")}.
					<br />
					Our office is located at {business.address.line1},{" "}
					{business.address.city}, {business.address.state}{" "}
					{business.address.postalCode}.
				</p>
			</div>

			<ServiceAreaMap points={fortMcMurrayPolygon} />

			<div className="grid gap-8 lg:grid-cols-2">
				<div>
					<h2 className="text-2xl font-semibold">Fort McMurray Communities</h2>
					<ul className="mt-4 grid gap-2 sm:grid-cols-2">
						{fortMcMurrayCommunities.map((c) => (
							<li key={c} className="flex items-center gap-2 text-sm">
								<span aria-hidden>📍</span>
								<span>{c}</span>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="text-2xl font-semibold">Nearby Areas We Serve</h2>
					<ul className="mt-4 grid gap-2 sm:grid-cols-2">
						{nearbyAreas.map((c) => (
							<li key={c} className="flex items-center gap-2 text-sm">
								<span aria-hidden>📍</span>
								<span>{c}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			<BookNowCta
				title="Serving Your Community with Compassionate Care"
				description="No matter where you are in Fort McMurray or the surrounding areas, we're here to support your health journey. Schedule your visit today."
				primaryButtonText="Book Your Visit"
			/>
		</section>
	);
}
