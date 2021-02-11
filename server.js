import path from "path";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
import connectDb from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import homesRoutes from "./routes/homeRoutes.js";
const app = express();
dotenv.config();
connectDb();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/homes", homesRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
