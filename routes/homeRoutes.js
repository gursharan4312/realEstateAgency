import express from "express";
import { getAllHomes } from "../controllers/homeController.js";

const router = express.Router();

router.route("/").get(getAllHomes);

export default router;
