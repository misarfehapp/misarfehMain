import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Delete existing data
  await prisma.images.deleteMany()
  await prisma.product.deleteMany()
  await prisma.location.deleteMany()
  await prisma.restaurant.deleteMany()
  await prisma.foodSensitivity.deleteMany()
  await prisma.discountCode.deleteMany()
  await prisma.address.deleteMany()
  await prisma.wallet.deleteMany()
  await prisma.user.deleteMany()

  // Create restaurants with their locations
  const restaurants = await Promise.all([
    prisma.restaurant.create({
      data: {
        name: 'فست فود لاویا',
        rate: 4.5,
        phoneNumber: '071378983',
        address: 'بلوار بهشتی',
        location: {
          create: {
            latitude: 29.591768,
            longitude: 52.583698
          }
        }
      }
    }),
    prisma.restaurant.create({
      data: {
        name: 'رستوران سنتی شیراز',
        rate: 4.8,
        phoneNumber: '071378984',
        address: 'خیابان زند',
        location: {
          create: {
            latitude: 29.601768,
            longitude: 52.573698
          }
        }
      }
    }),
    prisma.restaurant.create({
      data: {
        name: 'کافه برکت',
        rate: 4.2,
        phoneNumber: '071378985',
        address: 'خیابان ملاصدرا',
        location: {
          create: {
            latitude: 29.581768,
            longitude: 52.593698
          }
        }
      }
    })
  ]);

  // Create products for each restaurant
  const productsData = [
    {
      title: 'صبحانه ایرانی',
      description: 'املت، نان تازه، چای',
      originalPrice: 128000,
      discountedPrice: 118000,
      discount: 10,
      pickupStart: '08:00',
      pickupEnd: '10:30',
      quantity: 10,
      restaurantId: restaurants[0].id,
    },
    {
      title: 'پیتزا مخصوص',
      description: 'پیتزا با پنیر اضافه',
      originalPrice: 245000,
      discountedPrice: 196000,
      discount: 20,
      pickupStart: '12:00',
      pickupEnd: '15:30',
      quantity: 8,
      restaurantId: restaurants[0].id,
    },
    {
      title: 'چلو کباب کوبیده',
      description: 'دو سیخ کباب با برنج ایرانی',
      originalPrice: 185000,
      discountedPrice: 148000,
      discount: 20,
      pickupStart: '12:00',
      pickupEnd: '14:30',
      quantity: 15,
      restaurantId: restaurants[1].id,
    },
    {
      title: 'قهوه و کیک',
      description: 'لاته و کیک شکلاتی',
      originalPrice: 98000,
      discountedPrice: 78400,
      discount: 20,
      pickupStart: '14:00',
      pickupEnd: '18:30',
      quantity: 12,
      restaurantId: restaurants[2].id,
    }
  ];

  for (const productData of productsData) {
    await prisma.product.create({
      data: {
        ...productData,
        images: {
          create: {
            product: 'food.jpg',
            thumbnail: 'restaurant-thumb.jpg'
          }
        }
      }
    });
  }

  // Create food sensitivities
  const sensitivities = await prisma.foodSensitivity.createMany({
    data: [
      { name: 'گلوتن', description: 'حاوی گلوتن' },
      { name: 'لبنیات', description: 'حاوی لبنیات' },
      { name: 'آجیل', description: 'حاوی آجیل' }
    ]
  })

  // Create discount codes
  const discountCodes = await prisma.discountCode.createMany({
    data: [
      { code: 'ABCD', discount: 0.15 },
      { code: 'EFGH', discount: 0.20 },
      { code: 'IGKL', discount: 0.50 }
    ]
  })

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })