import { business } from "@/config/business";
import { ServiceAreaMap } from "@/components/service-area-map";

// Approximate polygon encompassing Calgary and listed nearby areas
const calgaryPolygon: [number, number][] = [
	[51.6, -115.8],
	[51.55, -115.1],
	[51.55, -114.7],
	[51.55, -114.25],
	[51.55, -113.9],
	[51.4, -113.5],
	[51.1, -113.3],
	[50.7, -113.3],
	[50.45, -113.6],
	[50.4, -114.4],
	[50.45, -115.1],
	[50.7, -115.6],
	[51.0, -115.8],
	[51.3, -115.9],
	[51.6, -115.8],
];

const calgaryCommunities: string[] = [
	"Beltline",
	"Altadore",
	"Arbour Lake",
	"Hillhurst",
	"Signal Hill",
	"Edgemont",
	"Downtown",
	"Inglewood",
	"Aspen Woods",
	"Pineridge",
	"Eau Claire",
	"West Hillhurst",
	"Elbow Park",
	"Tuxedo Park",
	"Hounsfield Heights/Briar Hill",
	"Winston Heights-Mountview",
	"Banff Trail",
	"South Calgary",
	"East Village",
	"Crescent Heights",
	"Cougar Ridge",
	"Discovery Ridge",
	"Erlton",
	"Scenic Acres",
	"Cliff Bungalow",
	"Dalhousie",
	"Scarboro",
	"Spruce Cliff",
	"Killarney",
	"Renfrew",
	"Palliser",
	"Downtown Commercial",
	"Lower Mount Royal",
];

const nearbyAreas: string[] = [
	"Airdrie",
	"Okotoks",
	"Chestermere",
	"Crossfield",
	"Morley",
	"Cochrane",
	"De Winton",
	"High River",
	"Springbank",
	"Langdon",
	"Strathmore",
	"Black Diamond",
	"Banff",
	"Canmore",
	"Turner Valley",
	"Bearspaw",
	"Heritage Point",
	"Brooks",
];

export default function LocationPage() {
	return (
		<section className="space-y-8">
			<div className="space-y-3">
				<h1 className="text-3xl font-semibold">Service Area</h1>
				<div className="prose prose-invert max-w-none text-foreground">
					<p>
						Calgary, Alberta sits where the prairie meets the Rocky Mountain
						foothills, and that geography defines the city’s pace, climate, and
						culture. With a population topping one million, Calgary blends
						entrepreneurial energy with easy access to trails, rivers, and the
						mountains. The Bow and Elbow Rivers wind through a connected pathway
						network, while neighbourhoods range from century homes and post‑war
						bungalows to dense urban infills and new suburban communities. The
						city is famous for the Calgary Stampede—ten days every July that
						bring a global spotlight, rodeo, midway, and community breakfasts to
						nearly every corner. Sports are a year‑round heartbeat: the Calgary
						Flames draw packed houses at the Saddledome, the Calgary Stampeders
						light up McMahon Stadium, and local arenas and fields power minor
						hockey, soccer, ringette, and more.
					</p>
          <br/>
					<p>
						Weather is a defining factor for buildings here. Deep winter freezes
						and windchill push plumbing to the limit, especially in exterior
						walls, garages, crawlspaces, and unconditioned mechanical rooms.
						Sudden Chinook warm‑ups swing temperatures by double digits,
						expanding and contracting materials and stressing fittings. Spring
						melts raise groundwater and test sump pumps, backwater valves, and
						weeping tile. Hard water is the everyday opponent—Calgary’s mineral
						content leaves scale on fixtures and inside water heaters, erodes
						cartridge valves, reduces tank and tankless efficiency, and shortens
						appliance life without maintenance.
					</p>
          <br/>
					<p>
						From a plumbing perspective, we routinely address: frozen or burst
						lines in uninsulated chases; sediment‑loaded hot water tanks and
						spent anode rods; tankless systems starved for flow by scale; slow
						drains from grease, sags, or inadequate venting; and sewer backups
						where tree roots find older clay laterals. In infills and commercial
						spaces, we balance recirculation loops, calibrate mixing valves,
						test backflow preventers, and tune hydronic systems that share
						domestic hot water. Preventative measures—pipe insulation,
						heat‑trace on vulnerable runs, expansion tanks, PRV service, annual
						descaling, and camera inspections—save money and headaches before
						peak season hits.
					</p>
          <br/>
					<p>
						Whether you live in Beltline, Killarney, Renfrew, Dalhousie, or a
						newer community on the city’s edge, we tailor solutions to
						construction era, usage, and water conditions. We also help navigate
						City of Calgary permits, code requirements, and utility‑smart
						upgrades that keep bills down while improving performance. Our team
						delivers clean, code‑compliant workmanship with transparent pricing
						and respectful service—so your plumbing is one less thing to worry
						about when the weather swings.
					</p>
				</div>
				<p className="text-muted-foreground">
					We proudly serve Calgary and surrounding communities including{" "}
					{business.serviceAreas.join(", ")}. 
          <br/>
          Our office is located at{" "}
					{business.address.line1}, {business.address.city},{" "}
					{business.address.state} {business.address.postalCode}.
				</p>
			</div>

			<ServiceAreaMap points={calgaryPolygon} />

			<div className="grid gap-8 lg:grid-cols-2">
				<div>
					<h2 className="text-2xl font-semibold">Calgary Communities</h2>
					<ul className="mt-4 grid gap-2 sm:grid-cols-2">
						{calgaryCommunities.map((c) => (
							<li key={c} className="flex items-center gap-2 text-sm">
								<span aria-hidden>📍</span>
								<span>{c}</span>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="text-2xl font-semibold">
						Areas Outside of Calgary We Serve
					</h2>
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
		</section>
	);
}
