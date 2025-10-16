// routes/event.routes.js
import express from 'express';
import { createEventController, getMyEvents } from '../controllers/event.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', authenticate, createEventController);
router.get('/', authenticate, getMyEvents);

export default router;
