export interface Restaurant {
  id: number;
  name: string;
  coordinates: {
    longitude: number;
    latitude: number;
  };
  discount: number;
  rating: number;
  distance: number;
  address: string;
}

export interface ViewState {
  longitude: number;
  latitude: number;
  zoom: number;
  bearing?: number;
  pitch?: number;
  padding?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}
