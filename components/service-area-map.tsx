"use client";

import dynamic from "next/dynamic";
import * as React from "react";

const LeafletMapInner = dynamic(
	() => import("@/components/leaflet-map-inner"),
	{ ssr: false }
);

type ServiceAreaMapProps = {
	points: [number, number][]; // [lat, lng]
	center?: [number, number];
	zoom?: number;
};

export const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({
	points,
	center = [56.7267, -111.3790], // Fort McMurray coordinates
	zoom = 9,
}) => {
	// Leaflet styles (minimal)
	React.useEffect(() => {
		const id = "leaflet-css";
		if (document.getElementById(id)) return;
		const link = document.createElement("link");
		link.id = id;
		link.rel = "stylesheet";
		link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
		link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
		link.crossOrigin = "";
		document.head.appendChild(link);
	}, []);

	const LMap: React.FC = () => (
		<LeafletMapInner
			points={points}
			center={center}
			zoom={zoom}
			style={{ height: 360, width: "100%" }}
		/>
	);

	return (
		<div
			className="relative w-full overflow-hidden rounded-lg border"
			aria-label="Service area map"
		>
			{/* Render only on client via dynamic import wrapper */}
			<LMap />
		</div>
	);
};
