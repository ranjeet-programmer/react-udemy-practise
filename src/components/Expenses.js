import ExpenseItem from "./ExpenseItem";
import "./expenses.css";
function Expenses(expense) {
  return (
    <div className="expenses">
      {expense.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
