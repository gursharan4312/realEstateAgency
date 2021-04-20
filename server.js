import path from "path";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
import connectDb from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import homesRoutes from "./routes/homeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
const app = express();
dotenv.config();
connectDb();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/homes", homesRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "client", "build")));

  app.get("/*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
