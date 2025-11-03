import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import ExpenseSummary from "./Components/ExpenseSummary";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("home");
  const [images, setImages] = useState([]);
  const [userId, setUserId] = useState(null);
  const [authError, setAuthError] = useState(""); 
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      id: URL.createObjectURL(file),
      file,
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const handleSignUp = async (email, password) => {
    setAuthError(""); // reset previous errors
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Sign up failed");
      }

      const data = await res.json();
      console.log("Signup success:", data);
      alert("Signup successful! Please log in.");
      setPage("login");
    } catch (error) {
      console.error("Signup error:", error);
      setAuthError(error.message);
    }
  };

  const handleLogin = async (email, password) => {
    setAuthError(""); // reset previous errors
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
      }

      const user = await res.json();
      if (user._id) {
        setIsLoggedIn(true);
        setUserId(user._id);
        setPage("expenses");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setAuthError(error.message);
    }
  };

 const addExpense = async (expenseData) => {
  if (!expenseData.amount || isNaN(expenseData.amount)) {
    console.error("Invalid amount input");
    return;
  }

  const formData = new FormData();

  formData.append("userId", userId);
  formData.append("title", expenseData.title);
  formData.append("amount", parseFloat(expenseData.amount)); 
  formData.append("category", expenseData.category);
  formData.append("date", expenseData.date);

  if (expenseData.receipt) {
    formData.append("receipt", expenseData.receipt);
  }

  try {
    const res = await fetch("http://localhost:5000/api/expenses/add", {
      method: "POST",
      body: formData,
    });

    const newExpense = await res.json();
    console.log("Saved to DB:", newExpense); // ✅ DEBUG
    setExpenses((prev) => [...prev, newExpense]);
  } catch (err) {
    console.error("Failed to add expense:", err);
  }
};



  const fetchSavedExpenses = async (month = null) => {
  if (!userId) {
    console.error("User ID not available yet");
    return;
  }
  try {
    const queryMonth = month || new Date().toISOString().slice(0, 7); // YYYY-MM
    const res = await fetch(`http://localhost:5000/api/expenses/by-month?userId=${userId}&month=${queryMonth}`);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    setExpenses(data);
    setPage("savedExpenses");
  } catch (error) {
    console.error("fetchSavedExpenses error:", error);
  }
};

  

  return (
    <div>
      <Home page={page} isLoggedIn={isLoggedIn} setPage={setPage} onSavedExpenses={fetchSavedExpenses} />

      {page === "login" && !isLoggedIn && (
        <>
          <Login onLogin={handleLogin} onSwitchToSignUp={() => setPage("signup")} />
          {authError && <div style={{ color: "red", textAlign: "center", marginTop: "10px" }}>{authError}</div>}
        </>
      )}

      {page === "signup" && (
        <>
          <SignUp onSignUp={handleSignUp} onSwitchToLogin={() => setPage("login")} />
          {authError && <div style={{ color: "red", textAlign: "center", marginTop: "10px" }}>{authError}</div>}
        </>
      )}

      {page === "expenses" && isLoggedIn && (
        <div className="app-container">
          <h1>Expense Management System</h1>
          <ExpenseForm onAddExpense={addExpense} />
          <ExpenseSummary expenses={expenses} />
          <ExpenseList expenses={expenses} />
        </div>
      )}

     {page === "savedExpenses" && (
  <div className="app-container">
    <h1>Saved Expenses</h1>

    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <label htmlFor="monthSelect" style={{ marginRight: "10px" }}>
        Select Month:
      </label>
      <input
        id="monthSelect"
        type="month"
        onChange={(e) => fetchSavedExpenses(e.target.value)}
      />
    </div>

    <ExpenseList expenses={expenses} />
  </div>
)}


     
    </div>
  );
}

export default App;
