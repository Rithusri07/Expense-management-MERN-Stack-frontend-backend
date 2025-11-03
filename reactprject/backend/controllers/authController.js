// controllers/authController.js
const User = require("../models/User");

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Signup error", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email, password });

    if (user) res.json(user);
    else res.status(401).json({ message: "Invalid credentials" });

  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

