import express from "express";
import {
  listStudents, getStudent, deleteStudent, listEvents, changeEventStatus
} from "../controllers/admin.controller.js";
import {
  createService, listServices, updateService, deleteService
} from "../controllers/service.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();
router.use(authenticate, authorizeRoles("ADMIN"));

// student management
router.get("/students", listStudents);
router.get("/students/:id", getStudent);
router.delete("/students/:id", deleteStudent);

// events
router.get("/events", listEvents);
router.put("/events/:id/status", changeEventStatus);

// services
router.post("/services", createService);
router.get("/services", listServices);
router.put("/services/:type/:id", updateService);
router.delete("/services/:type/:id", deleteService);

export default router;
