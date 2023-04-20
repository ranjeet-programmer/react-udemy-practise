import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0.01);
  const [date, setDate] = useState();
  const [flag, setFlag] = useState(false);

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);

    setTitle("");
    setAmount(0.01);
    setDate("");
  };

  const handleNewExpense = () => {
    setFlag(true);
  };

  const handleCancel = () => {
    setFlag(false);
  };

  let res = (
    <div className="new-expense__new">
      <button type="submit" onClick={handleNewExpense}>
        Add New Expense
      </button>
    </div>
  );

  if (flag) {
    res = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={handleTitleChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={date}
              onChange={handleDateChange}
            />
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="submit" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
  return res;
};

export default ExpenseForm;
