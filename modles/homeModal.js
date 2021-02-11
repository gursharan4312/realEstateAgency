import mongoose from "mongoose";

const homeSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    address: { type: String, required: true },
    images: [String],
    price: { type: Number, required: true },
    type: { type: String, required: true },
    date: Date,
    rooms: { type: Number, required: true },
    washrooms: { type: Number, required: true },
    pets: Boolean,
    size: { type: Number, required: true },
    position: {
      lat: Number,
      lng: Number,
    },
    details: String,
  },
  {
    timestamps: true,
  }
);

const Home = mongoose.model("Home", homeSchema);

export default Home;
