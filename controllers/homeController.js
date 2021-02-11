import Home from "../modles/homeModal.js";
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
  const home = new Home({
    title: "11840 96Ave Delta, BC V4C 3W8",
    address: "11840 96Ave Delta, BC V4C 3W8",
    name: "3bdr House",
    images: ["/uploads/house1.jpg", "/uploads/house2.jpg"],
    price: 200000,
    type: "Apartment",
    date: new Date(),
    rooms: 3,
    washrooms: 2,
    pets: true,
    size: 1500,
    position: {
      lat: 49.17682,
      lng: -122.8944,
    },
    details:
      "This over 6000 SqFT beautiful home located in the heart of White Rock has spectacular panoramic ocean views. Absolutely charming, this house has an open concept living with the ease of a built in elevator for easy access to all floors. Top of the line finishings galore, quality euro-tiles and hardwood throughout, 2 gas fireplaces, built in a/c & chef's delight gourmet kitchen with separate pantry and massive living area perfect for entertaining. Also incl. are 2 large master bedrooms, 6 bathrooms, 2 powder. Private covered terrace on 2 levels to enjoy views from sunrise to sunset. Basement includes large 2 bdrm suite and theatre room. Heated garage lots parking avail. for RV, boat, motorhome. Cleaner air & more sunshine too! Look no further! To Book a Showing, Visit: https://hopestreet.ca/rental/8-bedroom-gorgeous-house-for-rent-in-white-rock",
  });
  const createdHome = await home.save();
  res.status(201).json(createdHome);
});

export { getAllHomes, addNewHome };
