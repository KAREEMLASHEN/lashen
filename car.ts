import { Router } from "express";
import { createCar, getCar,  deleteCar,getCars } from "../modules/car";
import { validateCar } from "../middlewares/validation";

export const carRoutes = Router(); 

carRoutes.get("/", getCars);

carRoutes.get("/:id", getCar);
carRoutes.post("/", validateCar, createCar);
carRoutes.put("/:id", validateCar, deleteCar); 

