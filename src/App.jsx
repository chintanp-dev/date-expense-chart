import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 549,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TeleVision",
    amount: 249999.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 94000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 45000,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Let's Get Started!</h2>

      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses item={expenses} />
    </>
  );
}

export default App;
