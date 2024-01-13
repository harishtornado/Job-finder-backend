// User controller
import User from "../model/UserModel.js";

export const createUser = async (req, res) => {
  const data = req.body;
  try {
    const user = await User.findOne({
      email: data.email,
    });
    if (!user) {
      const newUser = new User({
        name: data.name,
        email: data.email,
        password: data.password,
        profileUrl: data.profileUrl,
      });
      await newUser.save();
      res
        .status(201)
        .json({ message: "data added successfully", status: "ok" });
    } else {
      res
        .status(403)
        .json({ message: "User Already Exists", data: user, status: "retry" });
    }
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error occured:" + e.message, status: 500 });
  }
};

export const loginUser = async (req, res) => {
  const data = req.body;
  try {
    const user = await User.findOne({
      email: data.email,
    });
    if (user && user.password === data.password) {
      res
        .status(200)
        .json({ message: "Genunine Credentials", data: user, status: "ok" });
    } else {
      res.status(403).json({ message: "No such User", status: "retry" });
    }
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error occured:" + e.message, status: 500 });
  }
};

export const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      message: "User fetch successfull",
      data: updatedUser,
      status: "ok",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
