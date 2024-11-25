import { NextResponse } from 'next/server'
import { prisma } from '@/src/lib/db/prisma'
import path from 'path';
import fs from 'fs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lat = Number(searchParams.get('lat')) || 29.591768
  const lng = Number(searchParams.get('lng')) || 52.583698
  const filter = searchParams.get('filter') || 'nearest'

  try {
    const products = await prisma.product.findMany({
      where: {
        quantity: {
          gt: 0
        }
      },
      include: {
        restaurant: {
          include: {
            location: true
          }
        },
        images: true
      },
      orderBy: filter === 'cheapest' 
        ? { discountedPrice: 'asc' }
        : filter === 'newest' 
          ? { createdAt: 'desc' }
          : undefined
    })

    const formattedProducts = products.map(product => {
      const productImage = product.images?.product || 'food.jpg';
      const restaurantImage = product.images?.thumbnail || 'restaurant-thumb.jpg';

      // Verify image existence
      const productImagePath = path.join(process.cwd(), 'public', 'images', 'products', productImage);
      const restaurantImagePath = path.join(process.cwd(), 'public', 'images', 'restaurants', restaurantImage);

      return {
        id: product.id,
        title: product.title,
        discount: product.discount,
        priceAfter: product.discountedPrice,
        priceBefore: product.originalPrice,
        productImageSrc: `/images/products/${fs.existsSync(productImagePath) ? productImage : 'food.jpg'}`,
        restaurantImageSrc: `/images/restaurants/${fs.existsSync(restaurantImagePath) ? restaurantImage : 'restaurant-thumb.jpg'}`,
        descriptionTitle: product.title,
        description: product.description,
        startPickUp: product.pickupStart,
        endPickUp: product.pickupEnd,
        distance: calculateDistance(
          lat,
          lng,
          product.restaurant.location?.latitude || 0,
          product.restaurant.location?.longitude || 0
        ),
        rate: product.restaurant.rate,
        location: product.restaurant.address
      };
    })

    if (filter === 'nearest') {
      formattedProducts.sort((a, b) => a.distance - b.distance)
    }

    return NextResponse.json(formattedProducts)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return Number((R * c).toFixed(1))
}

function toRad(degrees: number): number {
  return degrees * (Math.PI/180)
}
