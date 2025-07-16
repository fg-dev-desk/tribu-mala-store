import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Clear existing data
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.product.deleteMany()
  await prisma.user.deleteMany()

  // Create products based on your current config
  const products = await prisma.product.createMany({
    data: [
      {
        name: "SDFM Classic Black",
        description: "Premium black hoodie with SDFM branding. Made from high-quality cotton blend for maximum comfort.",
        price: 149.99,
        stock: 25,
        image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
        image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
        category: "Hoodies",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black"],
        slug: "sdfm-classic-black",
        metaTitle: "SDFM Classic Black Hoodie - Premium Streetwear",
        metaDescription: "Shop the iconic SDFM Classic Black hoodie. Premium quality, comfortable fit, street style.",
        isActive: true,
        isFeatured: true,
      },
      {
        name: "SDFM Premium Gray",
        description: "Sophisticated gray hoodie with premium finishing. Perfect for casual and street style.",
        price: 154.99,
        stock: 20,
        image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
        image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
        category: "Hoodies",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Gray"],
        slug: "sdfm-premium-gray",
        metaTitle: "SDFM Premium Gray Hoodie - Luxury Streetwear",
        metaDescription: "Elevate your style with the SDFM Premium Gray hoodie. Superior comfort meets urban fashion.",
        isActive: true,
        isFeatured: true,
      },
      {
        name: "SDFM Signature Navy",
        description: "Deep navy hoodie with signature SDFM detailing. Crafted for those who appreciate quality.",
        price: 159.99,
        stock: 18,
        image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
        image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
        category: "Hoodies",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Navy"],
        slug: "sdfm-signature-navy",
        metaTitle: "SDFM Signature Navy Hoodie - Designer Streetwear",
        metaDescription: "Make a statement with the SDFM Signature Navy hoodie. Premium design meets street culture.",
        isActive: true,
        isFeatured: false,
      },
      {
        name: "SDFM Limited Edition",
        description: "Exclusive limited edition hoodie. Only a few pieces available. Collector's item for true SDFM fans.",
        price: 199.99,
        stock: 10,
        image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
        image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
        category: "Hoodies",
        sizes: ["M", "L", "XL"],
        colors: ["Black", "White"],
        slug: "sdfm-limited-edition",
        metaTitle: "SDFM Limited Edition Hoodie - Exclusive Collection",
        metaDescription: "Own a piece of SDFM history with this limited edition hoodie. Exclusive design, limited stock.",
        isActive: true,
        isFeatured: true,
      },
    ],
  })

  console.log('✅ Products created:', products.count)

  // Create a test user
  const testUser = await prisma.user.create({
    data: {
      email: "test@sdfm2520.com",
      name: "Test User",
      address: "123 Test Street",
      city: "Test City",
      zip: "12345",
      country: "US",
    },
  })

  console.log('✅ Test user created:', testUser.email)

  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })