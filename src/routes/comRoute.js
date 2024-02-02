import { Router } from "express";
import { createCom } from "../controllers/comController";
import { auth } from "../middlewares/AuthToken";

const comRoute = Router();

comRoute.post("/new-com/:postId", auth, createCom);

export default comRoute;
