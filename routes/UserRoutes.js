import express from "express";
import {
  createUser,
  loginUser,
  updateUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.post("/newUser", createUser);
router.post("/loginUser", loginUser);
router.put("/updateUser/:userId", updateUser);

export default router;
