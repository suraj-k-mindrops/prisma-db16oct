import { findUserById, updateUser } from "../services/user.service.js";
import { createPortfolio as createPortfolioService, getPortfolio, updatePortfolio } from "../services/portfolio.service.js";

export const getProfile = async (req, res, next) => {
  try {
    const user = await findUserById(req.user.id);
    res.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role, createdAt: user.createdAt, portfolio: user.portfolio } });
  } catch (err) {
    next(err);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const { name } = req.body;
    const user = await updateUser(req.user.id, { name });
    res.json({ message: "Profile updated", user });
  } catch (err) {
    next(err);
  }
};

export const createPortfolio = async (req, res, next) => {
  try {
    const { bio, skills } = req.body;
    const portfolio = await createPortfolio(req.user.id, { bio, skills });
    res.status(201).json({ message: "Portfolio created", portfolio });
  } catch (err) {
    next(err);
  }
};

export const getMyPortfolio = async (req, res, next) => {
  try {
    const portfolio = await getPortfolio(req.user.id);
    if (!portfolio) return res.status(404).json({ message: "Portfolio not found" });
    res.json({ portfolio });
  } catch (err) {
    next(err);
  }
};

export const updateMyPortfolio = async (req, res, next) => {
  try {
    const { bio, skills } = req.body;
    const portfolio = await updatePortfolio(req.user.id, { bio, skills });
    res.json({ message: "Portfolio updated", portfolio });
  } catch (err) {
    next(err);
  }
};
