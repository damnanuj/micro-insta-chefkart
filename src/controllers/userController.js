import User from "../models/userSchema.js";

// >>=========Create user controller================>>
export const createUser = async (req, res) => {
  try {
    const { name, mobile_number, address } = req.body;

    //>>============simple check=================>>
    if (!name || !mobile_number || !address) {
      return res.status(400).json({ error: "All fields are required" });
    }

    //========== Create user===============>>
    const user = await User.create({ name, mobile_number, address });
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error("Error creating user:", error.message || error);
    res.status(500).json({ error: "Failed to create user" });
  }
};

// >>=========get All user controller================>>
export const getAllUsers = async (req, res) => {
  try {
    //>>==============fetch all users present in db==================>>
    const users = await User.findAll();
    res.status(200).json({
      message: "All users fetched",
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
