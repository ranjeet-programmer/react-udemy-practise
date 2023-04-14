import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
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
      date: new Date(2023, 3, 14),
    },
    {
      id: 3,
      title: "Sunglasses from Zara",
      amount: "$24",
      date: new Date(2023, 3, 14),
    },
    {
      id: 4,
      title: "Shoes from Puma",
      amount: "80,000",
      date: new Date(2023, 3, 14),
    },
    {
      id: 5,
      title: "Baggy Cargo From GetKetch",
      amount: "$15",
      date: new Date(2023, 3, 14),
    },
  ];
  return (
    <div>
      <h1> Let's Start It</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
