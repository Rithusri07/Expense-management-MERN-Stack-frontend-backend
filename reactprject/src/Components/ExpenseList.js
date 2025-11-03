import React, { useState } from "react";
import "./Expense.css";

function ExpenseList({ expenses }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredExpenses = selectedCategory === "All"
    ? expenses
    : expenses.filter((expense) => expense.category === selectedCategory);

  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Groceries">Groceries</option>
        <option value="Gas Bill">Gas Bill</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Rent">Rent</option>
        <option value="Others">Others</option>
      </select>

      <div className="expense-list">
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense) => (
            <div key={expense._id || expense.id} className="expense-item">
              <span>{expense.title}</span>
              <span>Rs.{parseFloat(expense.amount || 0).toFixed(2)}</span>


              <span className="expense-category">{expense.category}</span>
             {expense.receipt && (
  <a
    href={`http://localhost:5000/uploads/${expense.receipt}`}
    target="_blank"
    rel="noopener noreferrer"
    title="Click to view full image"
  >
    <img
      src={`http://localhost:5000/uploads/${expense.receipt}`}
      width="100"
      alt="receipt"
      style={{ cursor: "zoom-in", border: "1px solid #ccc", borderRadius: "5px" }}
    />
  </a>
)}

            </div>
          ))
        ) : (
          <p>No expenses found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default ExpenseList;
