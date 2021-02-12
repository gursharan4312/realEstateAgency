import Home from "../models/homeModal.js";
import asyncHandler from "express-async-handler";

//@desc   get all homes list
//@route  GET /api/homes
//@access Public
const getAllHomes = asyncHandler(async (req, res) => {
  const homes = await Home.find({});
  res.json(homes);
});

//@desc   Create new home
//@route  POST /api/homes
//@access Public
const addNewHome = asyncHandler(async (req, res) => {
  let {
    title,
    address,
    name,
    images,
    price,
    type,
    date,
    rooms,
    washrooms,
    pets,
    size,
    position,
    details,
  } = req.body;
  const home = new Home({
    title,
    address,
    name,
    images,
    price,
    type,
    date,
    rooms,
    washrooms,
    pets,
    size,
    position,
    details,
  });
  const createdHome = await home.save();
  res.status(201).json(createdHome);
});

// @desc    Update a home
// @route   PUT /api/homes:id
// @access  Private/Admin
const updateHome = asyncHandler(async (req, res) => {
  const {
    title,
    address,
    name,
    images,
    price,
    type,
    date,
    rooms,
    washrooms,
    pets,
    size,
    position,
    details,
  } = req.body;
  const home = await Home.findById(req.params.id);

  if (home) {
    home.title = title;
    home.address = address;
    home.name = name;
    home.images = images;
    home.price = price;
    home.type = type;
    home.date = date;
    home.rooms = rooms;
    home.washrooms = washrooms;
    home.pets = pets;
    home.size = size;
    home.position = position;
    home.details = details;

    const updatedHome = await Home.save();
    res.status(201).json(updatedHome);
  } else {
    res.status(404);
    throw new Error("Home Not Found");
  }
});

// @desc    DELETE a home
// @route   DELETE /api/homes/:id
// @access  Private/Admin
const deleteHome = asyncHandler(async (req, res) => {
  const home = await Home.findById(req.params.id);
  if (home) {
    await home.remove();
    res.json({ message: "Home removed" });
  } else {
    res.status(404);
    throw new Error("Home not found");
  }
});

export { getAllHomes, addNewHome, updateHome, deleteHome };
