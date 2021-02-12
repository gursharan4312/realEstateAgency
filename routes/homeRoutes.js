import express from "express";
import {
  getAllHomes,
  addNewHome,
  deleteHome,
  updateHome,
} from "../controllers/homeController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getAllHomes).post(protect, admin, addNewHome);
router
  .route("/:id")
  .delete(protect, admin, deleteHome)
  .put(protect, admin, updateHome);

export default router;
