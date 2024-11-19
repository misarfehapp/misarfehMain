"use client";
import { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import CurrentLocation from '../map tools/CurrentLocation';
import { useMap } from 'react-leaflet';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const ZoomControl = dynamic(
  () => import('react-leaflet').then((mod) => mod.ZoomControl),
  { ssr: false }
);

// Create a MapController component to handle map instance
const MapController = ({ setMap }: { setMap: (map: L.Map) => void }) => {
  const map = useMap();
  
  useEffect(() => {
    setMap(map);
  }, [map, setMap]);
  
  return null;
};

const INITIAL_CENTER: LatLngExpression = [29.5926, 52.5319];
const INITIAL_ZOOM = 12;

const MapSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [map, setMap] = useState<L.Map | null>(null);

  const handleLocationFound = useCallback((e: L.LocationEvent) => {
    if (!map) return;
    
    const radius = e.accuracy;
    const circle = L.circle(e.latlng, {
      radius: radius,
      color: '#3388ff',
      fillColor: '#3388ff',
      fillOpacity: 0.2,
      weight: 1
    });

    map.addLayer(circle);
    setTimeout(() => map.removeLayer(circle), 3000);
  }, [map]);

  const handleLocationError = useCallback((e: L.ErrorEvent) => {
    console.error('Error getting location:', e.message);
  }, []);

  const handleLocationClick = useCallback(() => {
    if (!map) return;
    
    map.locate({
      setView: true,
      maxZoom: 16,
      enableHighAccuracy: true
    });
  }, [map]);

  useEffect(() => {
    if (!map) return;

    map.on('locationfound', handleLocationFound);
    map.on('locationerror', handleLocationError);

    return () => {
      map.off('locationfound', handleLocationFound);
      map.off('locationerror', handleLocationError);
    };
  }, [map, handleLocationFound, handleLocationError]);

  return (
    <div className="h-[calc(100vh-280px)] w-full relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-neutral-neutral95 flex items-center justify-center z-[15]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-key-colors-primary"></div>
        </div>
      )}
      
      <div className="absolute inset-0 z-[10]">
        <MapContainer
          center={INITIAL_CENTER}
          zoom={INITIAL_ZOOM}
          zoomControl={false}
          className="h-full w-full"
          whenReady={() => setIsLoading(false)}
        >
          <MapController setMap={setMap} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="bottomright" />
        </MapContainer>
      </div>

      <div className="absolute top-4 left-4 z-[15]">
        <CurrentLocation onClick={handleLocationClick} />
      </div>
    </div>
  );
};

export default MapSection;
