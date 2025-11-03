const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
console.log("File:", req.file);
    const { title, amount, category, date, userId } = req.body;
    const receipt = req.file ? req.file.filename : null;

    console.log("Received:", { title, amount, category, date, userId }); // ✅ DEBUG

    const expense = await Expense.create({
      title,
      amount,
      category,
      date,
      receipt,
      userId,
    });

    res.json(expense);
  } catch (err) {
    console.error("Add expense error:", err); // ✅ DEBUG
    res.status(500).json({ error: err.message });
  }
};
