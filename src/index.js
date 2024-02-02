import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import mongoose from "mongoose";
import authRoute from "./routes/userRoute";
import { auth } from "./middlewares/AuthToken";
import postRoute from "./routes/postRoute";
import comRoute from "./routes/comRoute";
import subredditRoute from "./routes/subRedditRoute";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log(`[📚 DATABASE] MongoDB est connecté !! `);
}

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Welcome API reddit"));
app.use("/auth", authRoute);
app.use("/post", postRoute);
app.use("/comment", comRoute);
app.use("/subreddit", subredditRoute);
app.listen(port, () =>
  console.log(`[SERVER] is running on: http://localhost:${port}`)
);
