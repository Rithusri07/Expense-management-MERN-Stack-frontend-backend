import React from "react";
import "./Expense.css";

function ExpenseItem({ expense }) {
  return (
    <div className="expense-item">
      <span>{expense.title}</span>
     <span>Rs.{parseFloat(expense.amount || 0).toFixed(2)}</span>

      <span className="expense-category">{expense.category}</span>
    </div>
  );
}
 export default ExpenseItem;
