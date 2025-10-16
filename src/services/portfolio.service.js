import prisma from "../config/db.js";

export const createPortfolio = async (userId, data) => {
  return await prisma.portfolio.create({
    data: {
      ...data,
      user: { connect: { id: userId } }
    }
  });
};

export const getPortfolio = async (userId) => {
  return await prisma.portfolio.findUnique({
    where: { userId }
  });
};

export const updatePortfolio = async (userId, data) => {
  return await prisma.portfolio.update({
    where: { userId },
    data
  });
};

export const deletePortfolio = async (userId) => {
  return await prisma.portfolio.delete({
    where: { userId }
  });
};
