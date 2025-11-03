const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addExpense } = require("../controllers/expenseController");
const Expense = require("../models/Expense");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/add", upload.single("receipt"), addExpense);

router.get("/by-month", async (req, res) => {
  const { userId, month } = req.query;
  if (!userId || !month) return res.status(400).json({ error: "User ID and month required" });

  const [year, monthNumber] = month.split("-").map(Number); // expects "2025-05"
  const start = new Date(year, monthNumber - 1, 1);
  const end = new Date(year, monthNumber, 1);

  try {
    const expenses = await Expense.find({
      userId,
      date: { $gte: start, $lt: end }
    });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
