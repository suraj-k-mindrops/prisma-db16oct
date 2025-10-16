import { createServiceProvider, getAllServices, updateServiceProvider, deleteServiceProvider } from "../services/serviceProvider.service.js";

export const createService = async (req, res, next) => {
  try {
    const { name, type, contact, location } = req.body;
    if (!name || !type) return res.status(400).json({ message: "Missing fields" });
    const sp = await createServiceProvider(type, { name, contact, location });
    res.status(201).json({ message: "Service created", sp });
  } catch (err) {
    next(err);
  }
};

export const listServices = async (req, res, next) => {
  try {
    const services = await getAllServices();
    res.json({ services });
  } catch (err) {
    next(err);
  }
};

export const updateService = async (req, res, next) => {
  try {
    const { type, id } = req.params;
    const data = req.body;
    const updated = await updateServiceProvider(type, Number(id), data);
    res.json({ message: "Updated", service: updated });
  } catch (err) {
    next(err);
  }
};

export const deleteService = async (req, res, next) => {
  try {
    const { type, id } = req.params;
    await deleteServiceProvider(type, Number(id));
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};
