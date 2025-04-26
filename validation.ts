import { RequestHandler } from "express";

export const validateCar:RequestHandler =(req, res, next) => {
    const { brand, model, carClass } = req.body;
    if (!brand || !model || !["A", "B", "C"].includes(carClass)) {
        res.status(400).json({ message: "Invalid Car Data" });
        return;
    }
    return next();
}

export const validateUsercheck: RequestHandler = (req, res, next) => {
    const { name, age } = req.body;
    if (!name || typeof age !== "number") {
        res.status(400).json({ message: "Invalid User Data" });
        return; 
    }
    return next(); 
};

