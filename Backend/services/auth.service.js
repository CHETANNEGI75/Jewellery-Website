import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByEmail, createUser } from "../dal/user.dal.js";

// 📝 REGISTER SERVICE
export const registerService = async (data) => {
  try {
    const { name, email, password, role } = data;

    // 🔍 validation
    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }

    // 🔍 check existing user
    const existing = await findUserByEmail(email);
    if (existing) {
      throw new Error("User already exists");
    }

    // 🔐 hash password
    const hashed = await bcrypt.hash(password, 10);

    // 🧠 create user
    const user = await createUser({
      name,
      email,
      password: hashed,
      role
    });

    return user;

  } catch (error) {
    throw new Error(error.message || "Registration failed");
  }
};


// 🔐 LOGIN SERVICE
export const loginService = async (data) => {
  try {
    const { email, password } = data;

    // 🔍 validation
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    // 🔍 find user
    const user = await findUserByEmail(email);
    if (!user) {
      throw new Error("Invalid credentials"); // 🔥 secure message
    }

    // 🔐 compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Invalid credentials");
    }

    // 🎟️ generate token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return { user, token };

  } catch (error) {
    throw new Error(error.message || "Login failed");
  }
};