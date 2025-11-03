import React from "react";
import "./Expense.css";

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + (parseFloat(expense.amount) || 0), 0);

  return (
    <div className="expense-summary">
      <h2>Total Expenses: Rs.{total.toFixed(2)}</h2>
    </div>
  );
}

export default ExpenseSummary;
