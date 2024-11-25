import { StaticImageData } from "next/image";

export interface Product {
    id: string | number;
    title: string;
    discount: number;
    priceAfter: number;
    priceBefore: number;
    productImageSrc: string | StaticImageData;
    restaurantImageSrc: string | StaticImageData;
    descriptionTitle: string;
    description: string;
    startPickUp: string;
    endPickUp: string;
    distance: number;
    rate?: number;
    location?: string;
  }