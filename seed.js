import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  // Insert Users
  const users = [];
  for (let i = 1; i <= 6; i++) {
    const user = await prisma.user.create({
      data: {
        name: `User ${i}`,
        email: `user${i}@example.com`,
        password: `password${i}`,
        role: i % 2 === 0 ? 'ADMIN' : 'STUDENT',
      },
    });
    users.push(user);
  }
  console.log('Users inserted');

  // Insert Students
  const students = [];
  for (let i = 1; i <= 6; i++) {
    const student = await prisma.student.create({
      data: {
        name: `Student ${i}`,
        email: `student${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address ${i}`,
        organisation: `Org ${i}`,
      },
    });
    students.push(student);
  }
  console.log('Students inserted');

  // Insert EventTypes
  const eventTypes = [];
  for (let i = 1; i <= 6; i++) {
    const eventType = await prisma.eventType.create({
      data: {
        name: `Event Type ${i}`,
        color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
        description: `Description for Event Type ${i}`,
        category: `Category ${i}`,
        subEvents: JSON.stringify([`Sub ${i}1`, `Sub ${i}2`]),
      },
    });
    eventTypes.push(eventType);
  }
  console.log('EventTypes inserted');

  // Insert Venues
  for (let i = 1; i <= 6; i++) {
    await prisma.venue.create({
      data: {
        name: `Venue ${i}`,
        capacity: 100 + i * 10,
        location: `Location ${i}`,
        description: `Description for Venue ${i}`,
        amenities: JSON.stringify([`Amenity ${i}1`, `Amenity ${i}2`]),
        eventTypeId: eventTypes[(i - 1) % eventTypes.length].id, // Cycle through event types accordingly
      },
    });
  }
  console.log('Venues inserted');

  // Insert Events
  for (let i = 1; i <= 6; i++) {
    await prisma.event.create({
      data: {
        title: `Event ${i}`,
        description: `Description for Event ${i}`,
        date: new Date(2024, 10 + i, 15),
        location: `Event Location ${i}`,
        studentId: users[i % users.length].id,
      },
    });
  }
  console.log('Events inserted');

  // Insert LogisticsServiceProvider
  for (let i = 1; i <= 6; i++) {
    await prisma.logisticsServiceProvider.create({
      data: {
        name: `Logistics Provider ${i}`,
        contact: `Contact ${i}`,
        location: `Location ${i}`,
      },
    });
  }
  console.log('LogisticsServiceProviders inserted');

  // Insert CateringService
  for (let i = 1; i <= 6; i++) {
    await prisma.cateringService.create({
      data: {
        name: `Catering Service ${i}`,
        contact: `Contact ${i}`,
        location: `Location ${i}`,
      },
    });
  }
  console.log('CateringServices inserted');

  // Insert SecurityAgency
  for (let i = 1; i <= 6; i++) {
    await prisma.securityAgency.create({
      data: {
        name: `Security Agency ${i}`,
        contact: `Contact ${i}`,
        location: `Location ${i}`,
      },
    });
  }
  console.log('SecurityAgencies inserted');

  // Insert GiftShop
  for (let i = 1; i <= 6; i++) {
    await prisma.giftShop.create({
      data: {
        name: `Gift Shop ${i}`,
        contact: `Contact ${i}`,
        location: `Location ${i}`,
      },
    });
  }
  console.log('GiftShops inserted');

  // Insert DJ
  for (let i = 1; i <= 6; i++) {
    await prisma.dJ.create({
      data: {
        name: `DJ ${i}`,
        contact: `Contact ${i}`,
        location: `Location ${i}`,
      },
    });
  }
  console.log('DJs inserted');

  // Insert Photographer
  for (let i = 1; i <= 6; i++) {
    await prisma.photographer.create({
      data: {
        name: `Photographer ${i}`,
        contact: `Contact ${i}`,
        location: `Location ${i}`,
      },
    });
  }
  console.log('Photographers inserted');

  // Insert Vendors
  for (let i = 1; i <= 6; i++) {
    await prisma.vendor.create({
      data: {
        name: `Vendor ${i}`,
        category: `Category ${i}`,
        contact: `Contact ${i}`,
        email: `vendor${i}@example.com`,
        address: `Address ${i}`,
        website: `https://vendor${i}.com`,
      },
    });
  }
  console.log('Vendors inserted');

  // Insert ContentPage
  for (let i = 1; i <= 6; i++) {
    await prisma.contentPage.create({
      data: {
        title: `Content Page ${i}`,
        content: `Content for page ${i}`,
        lastModified: new Date().toISOString(),
        slug: `page-${i}`,
      },
    });
  }
  console.log('ContentPages inserted');

  // Insert MediaItem
  for (let i = 1; i <= 6; i++) {
    await prisma.mediaItem.create({
      data: {
        name: `Media Item ${i}`,
        type: i % 3 === 0 ? 'IMAGE' : i % 3 === 1 ? 'DOCUMENT' : 'VIDEO',
        size: `${i * 100}KB`,
        uploaded: new Date().toISOString(),
        url: `https://example.com/media${i}`,
      },
    });
  }
  console.log('MediaItems inserted');

  // Insert NewsItem
  for (let i = 1; i <= 6; i++) {
    await prisma.newsItem.create({
      data: {
        title: `News Item ${i}`,
        content: `Content for news ${i}`,
        date: new Date().toISOString(),
        author: `Author ${i}`,
        tags: JSON.stringify([`Tag ${i}1`, `Tag ${i}2`]),
        imageUrl: `https://example.com/news${i}.jpg`,
      },
    });
  }
  console.log('NewsItems inserted');

  console.log('All dummy data inserted successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
