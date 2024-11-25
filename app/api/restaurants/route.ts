import { NextResponse } from 'next/server'
import { prisma } from '@/src/lib/db/prisma'
import type { Restaurant } from '@/types/map'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lat = Number(searchParams.get('lat')) || 29.591768
  const lng = Number(searchParams.get('lng')) || 52.583698

  try {
    const restaurants = await prisma.restaurant.findMany({
      include: {
        location: true,
        products: {
          include: {
            images: true
          }
        }
      }
    })

    const formattedRestaurants: Restaurant[] = restaurants.map(restaurant => ({
      id: Number(restaurant.id),
      name: restaurant.name,
      coordinates: {
        latitude: restaurant.location?.latitude || 0,
        longitude: restaurant.location?.longitude || 0
      },
      discount: restaurant.products[0]?.discount || 0,
      rating: restaurant.rate,
      distance: calculateDistance(
        lat,
        lng,
        restaurant.location?.latitude || 0,
        restaurant.location?.longitude || 0
      ),
      address: restaurant.address
    }))

    return NextResponse.json(formattedRestaurants)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch restaurants' },
      { status: 500 }
    )
  }
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Earth's radius in km
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