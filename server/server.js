import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import projectRoutes from "./routes/projects.js";

// CONFIGURATION
const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("projects", projectRoutes);

// MONGOOSE SETUP
const PORT = process.env.port || 3001;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));