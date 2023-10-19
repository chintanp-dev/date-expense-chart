import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, seFilteredYear] = useState("2020");

  // const [filterInfoText, setFilterInfoText] = useState("2019, 2021 & 2022");

  const filterChangeHandler = (selectedYear) => {
    seFilteredYear(selectedYear);
    // if (selectedYear === "2019") {
    //   setFilterInfoText("2020, 2021 & 2022");
    // } else if (selectedYear === "2020") {
    //   setFilterInfoText("2019, 2021 & 2022");
    // } else if (selectedYear === "2021") {
    //   setFilterInfoText("2019, 2020 & 2022");
    // } else {
    //   setFilterInfoText("2019, 2020 & 2021");
    // }
  };

  // let filterInfoText = "2019, 2021 & 2022";

  // if (filteredYear === "2019") {
  //   filterInfoText = "2020, 2021 & 2022";
  // } else if (filteredYear === "2021") {
  //   filterInfoText = "2019, 2020 & 2022";
  // } else {
  //   filterInfoText = "2019, 2020 & 2021";
  // }

  // const filterChangeHandler = (selectedYear) => {
  //   seFilteredYear(selectedYear);
  // };

  // console.log(props.item);

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList item={filteredExpenses} />

        {/* <p>Data for Year {filterInfoText} are Hidden.</p> */}
      </Card>
    </div>
  );
};
export default Expenses;
