import prisma from "../config/db.js";
import bcrypt from "bcryptjs";

export const createUser = async (data) => {
  const hashed = await bcrypt.hash(data.password, 10);
  return await prisma.user.create({
    data: { ...data, password: hashed },
    select: { id: true, name: true, email: true, role: true, createdAt: true }
  });
};

export const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({ where: { email } });
};

export const findUserById = async (id) => {
  return await prisma.user.findUnique({ where: { id } });
};

export const updateUser = async (id, data) => {
  return await prisma.user.update({ where: { id }, data });
};

export const deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id } });
};

export const getAllStudents = async () => {
  return await prisma.user.findMany({
    where: { role: "STUDENT" },
    select: { id: true, name: true, email: true, createdAt: true }
  });
};

export const getStudentWithDetails = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
    include: { events: true, portfolio: true }
  });
};

export const verifyPassword = async (password, hashed) => {
  return await bcrypt.compare(password, hashed);
};
