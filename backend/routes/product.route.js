import express from 'express';
const router = express.Router();
export default router; //export the router
import { createProduct, getProducts, updateProduct , deleteProduct} from '../controllers/product.controller.js';

router.post("/", createProduct);//create a product

router.put("/:id", updateProduct);//update a product

router.get("/", getProducts);//get all products

router.delete("/:id", deleteProduct);//delete a product

