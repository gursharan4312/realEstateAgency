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
//@access Private
const addNewHome = asyncHandler(async (req, res) => {
  let {
    address,
    city,
    state,
    postalCode,
    country,
    images,
    price,
    type,
    rooms,
    washrooms,
    pets,
    size,
    position,
    details,
  } = req.body;
  const home = new Home({
    address: {
      address,
      city,
      state,
      postalCode,
      country,
      position,
    },
    images,
    price,
    type,
    date: new Date(),
    rooms,
    washrooms,
    pets,
    size,
    details,
    posted_by: req.user._id,
  });
  const createdHome = await home.save();
  res.status(201).json(createdHome);
});

// @desc    Update a home
// @route   PUT /api/homes:id
// @access  Private/Admin
const updateHome = asyncHandler(async (req, res) => {
  const {
    address,
    city,
    state,
    postalCode,
    country,
    images,
    price,
    type,
    rooms,
    washrooms,
    pets,
    size,
    position,
    details,
  } = req.body;
  const home = await Home.findById(req.params.id);

  if (home) {
    if (home.posted_by.equals(req.user._id)) {
      home.address.address = address;
      home.address.city = city;
      home.address.state = state;
      home.address.postalCode = postalCode;
      home.address.country = country;
      home.address.position = position;
      home.images = images;
      home.price = price;
      home.type = type;
      home.date = date;
      home.rooms = rooms;
      home.washrooms = washrooms;
      home.pets = pets;
      home.size = size;
      home.details = details;

      const updatedHome = await Home.save();
      res.status(201).json(updatedHome);
    } else {
      throw new Error("User Verification Failed");
    }
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
    if (home.posted_by.equals(req.user._id)) {
      await home.remove();
      res.json({ message: "Home removed" });
    }else{
      throw new Error("User Verification Failed");
    }
  } else {
    res.status(404);
    throw new Error("Home not found");
  }
});

export { getAllHomes, addNewHome, updateHome, deleteHome };
