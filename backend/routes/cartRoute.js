import express from "express";
import {
  addToCart,
  updateCart,
  getCart,
} from "../controller/cartController.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/get",authUser, getCart);
cartRouter.post("/add",authUser, addToCart);
cartRouter.post("/update",authUser, updateCart);

export default cartRouter;
