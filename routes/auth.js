import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

// actual route is "/auth/login"
router.post("/login", login)

export default router