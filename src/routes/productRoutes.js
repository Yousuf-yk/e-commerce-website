import express from "express";
import { getProducts, getProductById } from "../controllers/productsControllers.js";
// import { getProductById } from "../controllers/productsController.js";  //display the card

const router = express.Router();

router.get("/", getProducts);  
router.get("product/:id", getProductById); //display the card

router.get("/product/:id", getProductById);

export default router;