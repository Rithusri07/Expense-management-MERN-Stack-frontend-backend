const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  amount: Number,
  category: String,
  date: Date,
  receipt: String,
});

module.exports = mongoose.model("Expense", ExpenseSchema);
