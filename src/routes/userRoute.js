import { Router } from "express";
import { inscription, login } from "../controllers/userController";

const authRoute = Router();

authRoute.post("/inscription", inscription);
authRoute.post("/login", login);

export default authRoute;
