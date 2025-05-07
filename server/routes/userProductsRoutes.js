import express from "express";

import { getUserProducts } from "../controllers/userProductsControllers/getUserProductsController.js";
import { addUserProduct } from "../controllers/userProductsControllers/addUserProductController.js";
import { removeUserProduct } from "../controllers/userProductsControllers/removeUserproductController.js";

import { verifyToken } from "../utils/verify.js";

const userProductsRouter = express.Router();

userProductsRouter.get('/', verifyToken, getUserProducts);

userProductsRouter.post('/add', verifyToken, addUserProduct);

userProductsRouter.delete('/remove/:productId', verifyToken, removeUserProduct);

export default userProductsRouter;