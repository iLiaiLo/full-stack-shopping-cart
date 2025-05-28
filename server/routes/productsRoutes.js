import express from "express";

import { productController } from "../controllers/productsControllers/productController.js";
import { productsFilterController } from "../controllers/productsControllers/productsFilterController.js";
import { singleProductController } from "../controllers/productsControllers/singleProductController.js";
import { verifyToken } from "../utils/verify.js";

const ProductRouter = express.Router();

ProductRouter.get("/", verifyToken, productController);
ProductRouter.get("/filter_products", verifyToken, productsFilterController);
ProductRouter.get("/:id", verifyToken, singleProductController);

export default ProductRouter;
