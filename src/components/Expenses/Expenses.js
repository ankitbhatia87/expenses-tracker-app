import { useState } from "react";
import Card from "../UI/Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState("2020");
  const [expensesList, setExpensesList] = useState(props.expenseList);
  const handleFilterValue = (enteredFilterValue) => {
    setExpensesList((prevState) =>
      props.expenseList.filter(
        (expense) => new Date(expense.date).getFullYear() === parseInt(enteredFilterValue)
      )
    );
    setFilterValue(enteredFilterValue);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={filterValue}
          onChangeFilter={handleFilterValue}
        />
        {expensesList.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
