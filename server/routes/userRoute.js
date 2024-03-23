import express from "express";
import { createUser, getUser, getUserId } from "../controllers/userController.js";

const router = express.Router();

router.post("/user", createUser);

router.get("/user", getUser);
router.get("/user/:id", getUserId);

export default router;