import prisma from "../config/db.js";

const modelMap = {
  logistics: 'logisticsServiceProvider',
  catering: 'cateringService',
  security: 'securityAgency',
  giftshop: 'giftShop',
  dj: 'dj',
  photographer: 'photographer'
};

export const createServiceProvider = async (type, data) => {
  const modelName = modelMap[type];
  if (!modelName) throw new Error(`Invalid service type: ${type}`);
  return await prisma[modelName].create({ data });
};

export const getAllServices = async () => {
  const services = [];
  for (const [type, modelName] of Object.entries(modelMap)) {
    const records = await prisma[modelName].findMany({ orderBy: { createdAt: "desc" } });
    records.forEach(record => record.type = type);
    services.push(...records);
  }
  return services.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export const updateServiceProvider = async (type, id, data) => {
  const modelName = modelMap[type];
  if (!modelName) throw new Error(`Invalid service type: ${type}`);
  return await prisma[modelName].update({ where: { id }, data });
};

export const deleteServiceProvider = async (type, id) => {
  const modelName = modelMap[type];
  if (!modelName) throw new Error(`Invalid service type: ${type}`);
  return await prisma[modelName].delete({ where: { id } });
};
