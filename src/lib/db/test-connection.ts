import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testConnection() {
  try {
    await prisma.$connect()
    console.log('✅ Successfully connected to database')
    
    const restaurantCount = await prisma.restaurant.count()
    console.log(`Number of restaurants in database: ${restaurantCount}`)
    
  } catch (error) {
    console.error('❌ Error connecting to database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()