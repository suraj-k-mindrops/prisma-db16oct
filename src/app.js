import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import studentRoutes from './routes/student.routes.js';
import adminRoutes from './routes/admin.routes.js';
import eventRoutes from './routes/events.route.js';
import serviceRoutes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import prisma from './config/db.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Event Backend API');
});

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/services', serviceRoutes);

// Error handling middleware
app.use(errorHandler);

prisma.$connect()
.then(() => {
    console.log('Connected to the database');
})
.catch((err) => {
    console.error('Failed to connect to the database:', err);
})

export default app;
