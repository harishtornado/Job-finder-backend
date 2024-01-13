import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

configDotenv();
const port = process.env.PORT;
const app = express();
const connection_link = process.env.MONGODB_URL;

app.use(express.json(), cors());

const connectDB = async () => {
  try {
    await mongoose.connect(connection_link);
    console.log("MongoDB connected!!");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};
connectDB();

app.use("/user", userRoutes);
app.use("/job", jobRoutes);

app.listen(port, () => {
  console.log("server listening on port " + port);
});
