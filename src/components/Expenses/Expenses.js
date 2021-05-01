import { useState } from "react";
import Card from "../UI/Card/Card";
import ExpenseChart from "./ExpenseChart";
import ExpensesList from "./ExpenseList/ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState("2020");
  const handleFilterValue = (enteredFilterValue) => {
    setFilterValue(enteredFilterValue);
  };
  const filteredExpenses = props.expenseList.filter(
    (expense) => expense.date.getFullYear() === parseInt(filterValue)
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={filterValue}
          onChangeFilter={handleFilterValue}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
