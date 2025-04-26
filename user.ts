import { Router } from "express";
import { createUser, getUser , deleteUser , getUsers} from "../modules/user";
import { validateUsercheck } from "../middlewares/validation";

export const userRoutes = Router(); 

userRoutes.get("/", getUsers);
userRoutes.get("/:id", getUser);
userRoutes.post("/", validateUsercheck, createUser);
userRoutes.put("/:id", validateUsercheck, deleteUser); 