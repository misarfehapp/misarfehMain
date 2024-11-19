import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  ZoomControl,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon } from "leaflet";
import LocationIndicator from "../map tools/LocationIndicator";
import PlaceIndicator from "../map tools/PlaceIndicator";
import PlaceAmount from "../map tools/PlaceAmount";
import { createRoot } from "react-dom/client";
import { useEffect, useState, useRef } from "react";
import CurrentLocation from "../map tools/CurrentLocation";

// Custom hook to create a React root for rendering React components as Leaflet markers
const useCreateRoot = () => {
  return (container: HTMLElement) => {
    const root = createRoot(container);
    return (children: React.ReactNode) => root.render(children);
  };
};

interface Restaurant {
  id: number;
  position: [number, number];
  name: string;
}

const MapEventHandler = ({
  onMoveEnd,
}: {
  onMoveEnd: (center: [number, number]) => void;
}) => {
  const map = useMapEvents({
    moveend: () => {
      const center = map.getCenter();
      onMoveEnd([center.lat, center.lng]);
    },
  });
  return null;
};

const MapController = ({
  center,
  onZoomEnd,
}: {
  center: [number, number];
  onZoomEnd: (zoom: number) => void;
}) => {
  const map = useMap();

  useEffect(() => {
    // Only set view once on initial mount
    if (map && !map.getZoom()) {
      map.setView(center, 15);
    }

    map.on("zoomend", () => {
      onZoomEnd(map.getZoom());
    });

    return () => {
      map.off("zoomend");
    };
  }, [map, onZoomEnd]);

  return null;
};

const MapSection = () => {
  const [currentLocation, setCurrentLocation] = useState<[number, number]>([
    29.5926, 52.5836,
  ]);
  const [indicatorLocation, setIndicatorLocation] = useState<[number, number]>([
    29.5926, 52.5836,
  ]);
  const [currentZoom, setCurrentZoom] = useState(15);
  const mapRef = useRef(null);

  // Sample restaurant data
  const restaurants: Restaurant[] = [
    { id: 1, position: [29.5926, 52.5836], name: "Restaurant 1" },
    { id: 2, position: [29.5936, 52.5846], name: "Restaurant 2" },
    { id: 3, position: [29.5916, 52.5826], name: "Restaurant 3" },
    { id: 4, position: [29.5946, 52.5856], name: "Restaurant 4" },
    { id: 5, position: [29.5906, 52.5816], name: "Restaurant 5" },
  ];

  const handleGetCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation: [number, number] = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          setCurrentLocation(newLocation);
          setIndicatorLocation(newLocation);
          if (mapRef.current) {
            (mapRef.current as any).setView(newLocation, 15);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleMapMoveEnd = (center: [number, number]) => {
    setCurrentLocation(center); // Update the current location when map moves
  };

  // Function to create markers based on zoom level
  const createMarkers = () => {
    if (currentZoom >= 14) {
      // Show individual restaurant markers
      return restaurants.map((restaurant) => (
        <Marker
          key={restaurant.id}
          position={restaurant.position}
          icon={createCustomMarker(PlaceIndicator)}
        />
      ));
    } else {
      // Show clustered marker with count
      const centerPosition: [number, number] = [29.5926, 52.5836]; // Calculate center of all restaurants
      return (
        <Marker
          position={centerPosition}
          icon={createCustomMarker(PlaceAmount, { amount: restaurants.length })}
        />
      );
    }
  };

  // Function to create a custom marker using React components
  const createCustomMarker = (
    Component: React.ComponentType<any>,
    props = {}
  ) => {
    const container = document.createElement("div");
    const createRoot = useCreateRoot();
    const render = createRoot(container);
    render(<Component {...props} />);

    return divIcon({
      className: "",
      html: container,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });
  };

  const handleZoomEnd = (zoom: number) => {
    setCurrentZoom(zoom);
  };

  return (
    <div className="w-full h-[calc(85vh-200px)] relative z-0">
      <MapContainer
        center={currentLocation}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        dragging={true}
        zoomControl={false}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController center={currentLocation} onZoomEnd={handleZoomEnd} />

        {/* Restaurant Markers */}
        {createMarkers()}
      </MapContainer>

      {/* Fixed Location Indicator */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] pointer-events-none">
        <LocationIndicator />
      </div>

      {/* Current Location Button */}
      <div
        className="absolute bottom-5 right-2 cursor-pointer z-[1000]"
        onClick={handleGetCurrentLocation}
      >
        <CurrentLocation />
      </div>
    </div>
  );
};

export default MapSection;
