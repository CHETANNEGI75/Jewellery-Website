import { registerService, loginService } from "../services/auth.service.js";

/* ===========================
   REGISTER USER
=========================== */
export const registerUser = async (req, res) => {
  try {
    const data = req.body;

    const user = await registerService(data);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


/* ===========================
   LOGIN USER
=========================== */
export const loginUser = async (req, res) => {
  try {
    const data = req.body;

    const { user, token } = await loginService(data);

    res.status(200).json({
      success: true,
      message: "Login successful",
      user,
      token, // 🔥 IMPORTANT
    });

  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};