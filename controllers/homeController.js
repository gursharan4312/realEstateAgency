import Home from "../modles/homeModal.js";
import asyncHandler from "express-async-handler";

//@desc   get all homes list
//@route  GET /api/homes
//@access Public
const getAllHomes = asyncHandler(async (req, res) => {
  const orders = await Home.find({});
  res.json(orders);
});

export { getAllHomes };
