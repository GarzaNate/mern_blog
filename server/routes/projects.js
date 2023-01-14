import express from "express";
import { getUserProjects, likeProject } from "../controllers/projects.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ 
router.get("/userId/projects", verifyToken, getUserProjects);

// UPDATE
router.patch("/:id/like", verifyToken, likeProject);

export default router;