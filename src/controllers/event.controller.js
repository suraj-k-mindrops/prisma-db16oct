import { createEvent, getEventsByUser, getEventById, updateEvent, deleteEvent } from "../services/event.service.js";

export const createEventController = async (req, res, next) => {
  try {
    const { title, description, date, location } = req.body;
    if (!title || !date || !location) return res.status(400).json({ message: "Missing fields" });

    const event = await createEvent({
      title,
      description,
      date: new Date(date),
      location,
      studentId: req.user.id
    });
    res.status(201).json({ message: "Event created", event });
  } catch (err) {
    next(err);
  }
};

export const getMyEvents = async (req, res, next) => {
  try {
    const events = await getEventsByUser(req.user.id);
    res.json({ events });
  } catch (err) {
    next(err);
  }
};

export const updateEventController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ev = await getEventById(Number(id));
    if (!ev) return res.status(404).json({ message: "Event not found" });
    if (ev.studentId !== req.user.id) return res.status(403).json({ message: "Not allowed" });

    const data = req.body;
    const updated = await updateEvent(Number(id), data);
    res.json({ message: "Event updated", event: updated });
  } catch (err) {
    next(err);
  }
};

export const deleteEventController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ev = await getEventById(Number(id));
    if (!ev) return res.status(404).json({ message: "Event not found" });
    if (ev.studentId !== req.user.id) return res.status(403).json({ message: "Not allowed" });

    await deleteEvent(Number(id));
    res.json({ message: "Event deleted" });
  } catch (err) {
    next(err);
  }
};
