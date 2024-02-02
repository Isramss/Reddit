import { Router } from "express";
import { createSubReddit } from "../controllers/subRedditController";

const subredditRoute = Router();

subredditRoute.post("/add-subreddit", createSubReddit);

export default subredditRoute;
