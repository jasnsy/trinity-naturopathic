import Image from "next/image";
import { services } from "@/content/services";

export default function ServicesPage() {
	return (
		<section>
			<h1 className="text-3xl font-semibold mb-6">Services</h1>
			<div className="grid gap-6 sm:grid-cols-2">
				{services.map((s) => (
					<article key={s.slug} className="border rounded-lg overflow-hidden">
						{s.image && (
							<div className="relative w-full h-40 bg-muted">
								<Image
									src={s.image}
									alt={s.title}
									fill
									className="object-cover"
								/>
							</div>
						)}
						<div className="p-4">
							<h2 className="text-xl font-semibold">{s.title}</h2>
							<p className="text-sm text-muted-foreground mt-1">{s.summary}</p>
							{s.startingPrice && (
								<p className="mt-2 text-sm">
									<span className="font-medium">Starting at:</span>{" "}
									{s.startingPrice}
								</p>
							)}
							<ul className="mt-3 list-disc pl-5 text-sm">
								{s.features.map((f) => (
									<li key={f}>{f}</li>
								))}
							</ul>
							{s.details && (
								<p className="mt-3 text-sm text-muted-foreground">
									{s.details}
								</p>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
