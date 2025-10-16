import express from "express";
import authRoutes from "./auth.routes.js";
import adminRoutes from "./admin.routes.js";
import studentRoutes from "./student.routes.js";
import eventRoutes from "./events.route.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/student", studentRoutes);
router.use("/events", eventRoutes);

export default router;
