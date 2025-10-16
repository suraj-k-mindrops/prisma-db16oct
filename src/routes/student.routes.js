import express from "express";
import { getProfile, updateProfile, createPortfolio, getMyPortfolio, updateMyPortfolio } from "../controllers/student.controller.js";
import { createEventController, getMyEvents, updateEventController, deleteEventController } from "../controllers/event.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.use(authenticate, authorizeRoles("STUDENT"));

router.get("/profile", getProfile);
router.put("/profile", updateProfile);

// portfolio
router.post("/portfolio", createPortfolio);
router.get("/portfolio", getMyPortfolio);
router.put("/portfolio", updateMyPortfolio);

// events
router.post("/events", createEventController);
router.get("/events", getMyEvents);
router.put("/events/:id", updateEventController);
router.delete("/events/:id", deleteEventController);

export default router;
