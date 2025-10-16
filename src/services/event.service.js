import prisma from "../config/db.js";

export const createEvent = async (data) => {
  return await prisma.event.create({ data });
};

export const getEventsByUser = async (userId) => {
  return await prisma.event.findMany({
    where: { studentId: userId },
    orderBy: { createdAt: "desc" }
  });
};

export const getEventById = async (id) => {
  return await prisma.event.findUnique({ where: { id } });
};

export const updateEvent = async (id, data) => {
  return await prisma.event.update({ where: { id }, data });
};

export const deleteEvent = async (id) => {
  return await prisma.event.delete({ where: { id } });
};

export const getAllEvents = async () => {
  return await prisma.event.findMany({
    include: { student: true },
    orderBy: { createdAt: "desc" }
  });
};

export const updateEventStatus = async (id, status) => {
  return await prisma.event.update({ where: { id }, data: { status } });
};
