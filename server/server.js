import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(router);

mongoose.connect("mongodb+srv://mern_blog:secret_password@backenddb.sioezdg.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  }).catch(err => {
    console.error('unable to connect to database', err);
  })

