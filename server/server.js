import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoute.js";

const PORT = 3001;
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_ULI || "mongodb+srv://mern_blog:secret_password@backenddb.sioezdg.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  }).catch(err => {
    console.error('unable to connect to database', err);
  });

app.use(userRoutes);

// test api (home route)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

