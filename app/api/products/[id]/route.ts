import { NextResponse } from 'next/server'
import { prisma } from '@/src/lib/db/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: params.id
      },
      include: {
        restaurant: {
          include: {
            location: true
          }
        },
        images: true,
        sensitivities: true
      }
    })

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    const formattedProduct = {
      id: product.id,
      title: product.title,
      discount: product.discount,
      priceAfter: product.discountedPrice,
      priceBefore: product.originalPrice,
      productImageSrc: `/images/products/${product.images?.product || 'default.jpg'}`,
      restaurantImageSrc: `/images/restaurants/${product.images?.thumbnail || 'default.jpg'}`,
      descriptionTitle: product.restaurant.name,
      description: product.description,
      startPickUp: product.pickupStart,
      endPickUp: product.pickupEnd,
      rate: product.restaurant.rate,
      location: product.restaurant.address,
      sensitivities: product.sensitivities,
      restaurantPhone: product.restaurant.phoneNumber
    }

    return NextResponse.json(formattedProduct)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}