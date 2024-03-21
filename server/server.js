import express from "express";
import mongoose from "mongoose";
// import router from "./routes/index.js";
import User from "./models/User.js";

const PORT = 3001;
const app = express();

app.use(express.json());
// app.use(router);

mongoose.connect(process.env.MONGODB_ULI || "mongodb+srv://mern_blog:secret_password@backenddb.sioezdg.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  }).catch(err => {
    console.error('unable to connect to database', err);
  });

// test api (home route)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// create user route
app.post('/user', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({message: error.message})
  }
})

