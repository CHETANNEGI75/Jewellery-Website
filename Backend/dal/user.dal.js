import User from "../models/user.model.js";


// 🔍 FIND USER BY EMAIL
export const findUserByEmail = async (email) => {
  try {
    if (!email) throw new Error("Email is required");

    const user = await User.findOne({ email });

    return user;
  } catch (error) {
    throw new Error(error.message || "Error finding user by email");
  }
};


// ➕ CREATE USER
export const createUser = async (data) => {
  try {
    if (!data) throw new Error("User data is required");

    const user = await User.create(data);

    return user;
  } catch (error) {
    throw new Error(error.message || "Error creating user");
  }
};


// 🔍 FIND USER BY ID (future use)
export const findUserById = async (id) => {
  try {
    if (!id) throw new Error("User ID is required");

    const user = await User.findById(id);

    return user;
  } catch (error) {
    throw new Error(error.message || "Error finding user by ID");
  }
};


