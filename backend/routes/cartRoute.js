import express from "express";

import authMiddleware from "../middleware/auth.js";
import cartController from "../controllers/cartController.js"
const cartRouter=express.Router();

cartRouter.post("/add",authMiddleware, cartController.addToCart);
cartRouter.post("/remove",authMiddleware,cartController.removeFromCart);
cartRouter.post("/get",authMiddleware,cartController.getCart);

export default cartRouter;