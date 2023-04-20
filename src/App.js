import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Baggy Cargo From Zara",
    amount: "$45",
    date: new Date(2023, 3, 14),
  },
  {
    id: 2,
    title: "Jogger from H&m",
    amount: "$39",
    date: new Date(2022, 3, 14),
  },
  {
    id: 3,
    title: "Sunglasses from Zara",
    amount: "$24",
    date: new Date(2021, 3, 14),
  },
  {
    id: 4,
    title: "Shoes from Puma",
    amount: "80,000",
    date: new Date(2022, 3, 14),
  },
  {
    id: 5,
    title: "Baggy Cargo From GetKetch",
    amount: "$15",
    date: new Date(2023, 3, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    expense.amount = "$" + expense.amount;
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
