import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth_middleware.js";
import { createAnalytics } from "../controllers/analytics_controller.js";

const router = express.Router();

router.get("/",protectRoute,adminRoute, createAnalytics)

export default router;