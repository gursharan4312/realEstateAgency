import express from "express";
import { getAllHomes, addNewHome } from "../controllers/homeController.js";

const router = express.Router();

router.route("/").get(getAllHomes).post(addNewHome);

export default router;
