import express from 'express';
import cors from 'cors';
import { PrismaClient } from './generated/prisma/index.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Event Management API Server' });
});

// Venues routes
app.get('/api/venues', async (req, res) => {
  try {
    const venues = await prisma.venue.findMany();
    res.json(venues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/venues', async (req, res) => {
  try {
    const venue = await prisma.venue.create({ data: req.body });
    res.json(venue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/venues/:id', async (req, res) => {
  try {
    const venue = await prisma.venue.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(venue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/venues/:id', async (req, res) => {
  try {
    await prisma.venue.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'Venue deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// EventTypes routes
app.get('/api/event-types', async (req, res) => {
  try {
    const eventTypes = await prisma.eventType.findMany();
    res.json(eventTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/event-types', async (req, res) => {
  try {
    const eventType = await prisma.eventType.create({ data: req.body });
    res.json(eventType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/event-types/:id', async (req, res) => {
  try {
    const eventType = await prisma.eventType.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(eventType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/event-types/:id', async (req, res) => {
  try {
    await prisma.eventType.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'EventType deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Vendors routes
app.get('/api/vendors', async (req, res) => {
  try {
    const vendors = await prisma.vendor.findMany();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/vendors', async (req, res) => {
  try {
    const vendor = await prisma.vendor.create({ data: req.body });
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/vendors/:id', async (req, res) => {
  try {
    const vendor = await prisma.vendor.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/vendors/:id', async (req, res) => {
  try {
    await prisma.vendor.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'Vendor deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ContentPages routes
app.get('/api/content-pages', async (req, res) => {
  try {
    const contentPages = await prisma.contentPage.findMany();
    res.json(contentPages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/content-pages', async (req, res) => {
  try {
    const contentPage = await prisma.contentPage.create({ data: req.body });
    res.json(contentPage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/content-pages/:id', async (req, res) => {
  try {
    const contentPage = await prisma.contentPage.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(contentPage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/content-pages/:id', async (req, res) => {
  try {
    await prisma.contentPage.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'ContentPage deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// MediaItems routes
app.get('/api/media-items', async (req, res) => {
  try {
    const mediaItems = await prisma.mediaItem.findMany();
    res.json(mediaItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/media-items', async (req, res) => {
  try {
    const mediaItem = await prisma.mediaItem.create({ data: req.body });
    res.json(mediaItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/media-items/:id', async (req, res) => {
  try {
    const mediaItem = await prisma.mediaItem.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(mediaItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/media-items/:id', async (req, res) => {
  try {
    await prisma.mediaItem.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'MediaItem deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// NewsItems routes
app.get('/api/news-items', async (req, res) => {
  try {
    const newsItems = await prisma.newsItem.findMany();
    res.json(newsItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/news-items', async (req, res) => {
  try {
    const newsItem = await prisma.newsItem.create({ data: req.body });
    res.json(newsItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/news-items/:id', async (req, res) => {
  try {
    const newsItem = await prisma.newsItem.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(newsItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/news-items/:id', async (req, res) => {
  try {
    await prisma.newsItem.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'NewsItem deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Students routes
app.get('/api/students', async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/students', async (req, res) => {
  try {
    const student = await prisma.student.create({ data: req.body });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/students/:id', async (req, res) => {
  try {
    const student = await prisma.student.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/students/:id', async (req, res) => {
  try {
    await prisma.student.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Users routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const user = await prisma.user.create({ data: req.body });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/users/:id', async (req, res) => {
  try {
    await prisma.user.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Events routes
app.get('/api/events', async (req, res) => {
  try {
    const events = await prisma.event.findMany();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/events', async (req, res) => {
  try {
    const event = await prisma.event.create({ data: req.body });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/events/:id', async (req, res) => {
  try {
    const event = await prisma.event.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/events/:id', async (req, res) => {
  try {
    await prisma.event.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
