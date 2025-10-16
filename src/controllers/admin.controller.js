import { getAllStudents, getStudentWithDetails, deleteUser } from "../services/user.service.js";
import { getAllEvents, updateEventStatus } from "../services/event.service.js";

export const listStudents = async (req, res, next) => {
  try {
    const students = await getAllStudents();
    res.json({ students });
  } catch (err) {
    next(err);
  }
};

export const getStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getStudentWithDetails(Number(id));
    if (!user) return res.status(404).json({ message: "Student not found" });
    res.json({ user });
  } catch (err) {
    next(err);
  }
};

export const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteUser(Number(id));
    res.json({ message: "Student deleted" });
  } catch (err) {
    next(err);
  }
};

export const listEvents = async (req, res, next) => {
  try {
    const events = await getAllEvents();
    res.json({ events });
  } catch (err) {
    next(err);
  }
};

export const changeEventStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!["APPROVED", "REJECTED", "PENDING"].includes(status)) return res.status(400).json({ message: "Invalid status" });
    const event = await updateEventStatus(Number(id), status);
    res.json({ message: "Status updated", event });
  } catch (err) {
    next(err);
  }
};
