import express from "express";

import { productController } from "../controllers/productsControllers/productController.js";
import { productFilterController } from "../controllers/productsControllers/filterProductController.js";
import { verifyToken } from "../utils/verify.js";

const ProductRouter = express.Router();

ProductRouter.get("/", verifyToken, productController);
ProductRouter.get("/filtered_products", verifyToken, productFilterController);

export default ProductRouter;
