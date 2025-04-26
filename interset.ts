import { Router } from "express";
import { createInterset, getInterset, getIntersets } from "../modules/interset";


export const intersetRoutes = Router(); 

intersetRoutes.get("/", getIntersets);
intersetRoutes.get("/:id", getInterset);
intersetRoutes.post("/",  createInterset);


 