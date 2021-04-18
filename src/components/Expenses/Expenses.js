import { useState } from "react";
import Card from "../UI/Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState("2020");
  const handleFilterValue = (enteredFilterValue) => {
    setFilterValue(enteredFilterValue);
    console.log(enteredFilterValue);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedValue={filterValue} onChangeFilter={handleFilterValue} />
        <ExpenseItem
          date={props.expenseList[0].date}
          title={props.expenseList[0].title}
          amount={props.expenseList[0].amount}
        />
        <ExpenseItem
          date={props.expenseList[1].date}
          title={props.expenseList[1].title}
          amount={props.expenseList[1].amount}
        />
        <ExpenseItem
          date={props.expenseList[2].date}
          title={props.expenseList[2].title}
          amount={props.expenseList[2].amount}
        />
        <ExpenseItem
          date={props.expenseList[3].date}
          title={props.expenseList[3].title}
          amount={props.expenseList[3].amount}
        />
      </Card>
    </div>
  );
};

export default Expenses;
