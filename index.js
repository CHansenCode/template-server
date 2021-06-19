//Deps
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

//Routes
import usersRoutes from "./mcr/users.routes.js";
import mediaRoutes from "./mcr/media.routes.js";

//init
const app = express();
dotenv.config();

//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Routes
app.use("/users", usersRoutes);
app.use("/media", mediaRoutes);

//root
app.get("/", (req, res) => {
  res.send("Server: ChansenDesign, up and running");
});

//Vars
const MONGOUSER = process.env.MONGO_USERNAME;
const MONGOPASS = process.env.MONGO_PASSWORD;
const MONGODB = process.env.MONGO_DB;

const MONGO_URL = `mongodb+srv://${MONGOUSER}:${MONGOPASS}@cluster0.fjwvs.mongodb.net/${MONGODB}?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

//Mongo
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
