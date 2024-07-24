import express from "express";
import { getUsers, getUserById, updateUser, deleteUser, signOut } from "../controllers/userController.js";

const router = express.Router();

// router.post("/user", createUser);
router.post("/signout", signOut);

router.get("/user", getUsers);
router.get("/user/:id", getUserById);

router.post("user/:id", updateUser);
router.delete("user:id", deleteUser);

export default router;