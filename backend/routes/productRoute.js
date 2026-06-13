import express from "express";
import { createProduct, getAllProduct, getProductById, updateProduct, deleteProduct } from "../controllers/productController.js";
import validateproduct from "../middleware/validateProduct.js";
const router = express.Router();

router.get("/list", getAllProduct);
router.get("/:_id", getProductById);
router.post("/create",validateproduct, createProduct);
router.put("/modify/:_id",validateproduct, updateProduct);
router.delete("/remove/:_id", deleteProduct);

export default router;