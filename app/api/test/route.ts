import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const testData = {
      users: await prisma.user.findMany(),
      restaurants: await prisma.restaurant.findMany({
        include: { location: true }
      }),
      products: await prisma.product.findMany({
        include: { images: true }
      }),
      sensitivities: await prisma.foodSensitivity.findMany(),
      discountCodes: await prisma.discountCode.findMany()
    };
    
    return NextResponse.json(testData);
  } catch (error) {
    console.error('Test API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch test data' },
      { status: 500 }
    );
  }
}