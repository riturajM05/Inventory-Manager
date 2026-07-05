import express from "express";
import { createProduct, getAllProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import validateproduct from "../middleware/validateProduct.js";
import authUser from "../middleware/auth.js";
const productRouter = express.Router();

productRouter.get("/list", getAllProduct);
productRouter.post("/create", authUser, validateproduct, createProduct);
productRouter.put("/modify/:_id", authUser, validateproduct, updateProduct);
productRouter.delete("/remove/:_id", authUser, deleteProduct);

export default productRouter;