import React, { useState } from "react";
import "./Expense.css";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Groceries");
  const [date, setDate] = useState("");
  const [receipt, setReceipt] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && amount.trim()) {
      onAddExpense({
        title,
        amount: parseFloat(amount),
        category,
        date,
        receipt,
      });
      setTitle("");
      setAmount("");
      setCategory("Groceries");
      setDate("");
      setReceipt(null);
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Groceries">Groceries</option>
        <option value="Gas Bill">Gas Bill</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Rent">Rent</option>
        <option value="Others">Others</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="file"
        onChange={(e) => setReceipt(e.target.files[0])}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
