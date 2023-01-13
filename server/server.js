import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// CONFIGURATION
const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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