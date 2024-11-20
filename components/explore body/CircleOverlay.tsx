"use client";
import { Circle } from "react-leaflet";

interface CircleOverlayProps {
  center: [number, number];
  radius: number;
}

const CircleOverlay = ({ center, radius }: CircleOverlayProps) => {
  return (
    <Circle
      center={center}
      radius={radius * 1000} // Convert km to meters
      pathOptions={{
        color: "#000000",
        fillColor: "#ffffff",
        fillOpacity: 0.3,
        weight: 1,
      }}
    />
  );
};

export default CircleOverlay;
