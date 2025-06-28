import express from "express";
import {
  addProducts,
  deleteProducts,
  getProducts,
  updateProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", addProducts);

router.put("/:id", updateProducts);

router.delete("/:id", deleteProducts);

export default router;
