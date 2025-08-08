"use client";

import {
	MapContainer as RLMapContainer,
	TileLayer as RLTileLayer,
	Polygon as RLPolygon,
} from "react-leaflet";
import type { CSSProperties } from "react";

export type LeafletMapProps = {
	points: [number, number][];
	center: [number, number];
	zoom: number;
	style?: CSSProperties;
};

export default function LeafletMapInner({
	points,
	center,
	zoom,
	style,
}: LeafletMapProps) {
	const MapContainer = RLMapContainer as unknown as React.ComponentType<
		Record<string, unknown>
	>;
	const TileLayer = RLTileLayer as unknown as React.ComponentType<
		Record<string, unknown>
	>;
	const Polygon = RLPolygon as unknown as React.ComponentType<
		Record<string, unknown>
	>;
	return (
		<MapContainer
			center={center}
			zoom={zoom}
			style={style ?? { height: 360, width: "100%" }}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Polygon
				positions={points}
				pathOptions={{
					color: "#0ea5e9",
					weight: 2,
					fillColor: "#0ea5e9",
					fillOpacity: 0.15,
				}}
			/>
		</MapContainer>
	);
}
