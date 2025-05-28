import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import AuthRouter from "./routes/authRoutes.js";
import ProductRouter from "./routes/productsRoutes.js";
import userProductsRouter from "./routes/userProductsRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const port = process.env.PORT;
const uri = process.env.MONGO_URI;

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/user", AuthRouter);

app.use("/api/products", ProductRouter);

app.use("/api/user/products", userProductsRouter);

mongoose
  .connect(uri)
  .then(() => {
    console.log("connected sucessfully to database");
    app.listen(port, () => console.log(`server running on port ${port}`));
  })
  .catch((e) => console.log(e));
