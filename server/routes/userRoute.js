import express from "express";
import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/user", createUser);

router.get("/user", getUsers);
router.get("/user/:id", getUserById);

router.post("user/:id", updateUser);
router.delete("user:id", deleteUser);

export default router;