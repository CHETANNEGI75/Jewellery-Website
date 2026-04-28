import { registerService, loginService } from "../services/auth.service.js";


// 📝 REGISTER CONTROLLER
export const registerUser = async (req, res) => {
  try {
    const data = req.body;

    const user = await registerService(data);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};



// 🔐 LOGIN CONTROLLER
export const loginUser = async (req, res) => {
  try {
    const data = req.body;

    const result = await loginService(data);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: result.user,
      token: result.token
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};