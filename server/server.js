import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";

const PORT = 3001;
const app = express();


// EXPRESS MIDDLEWEAR
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MONGOOSE CONNECTION TO DATABASE
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://mern_blog:secret_password@backenddb.sioezdg.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  }).catch(err => {
    console.error('unable to connect to database', err);
  });

// ROUTES
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// MIDDLEWEAR ERROR FUNCTION
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode
  })
});

