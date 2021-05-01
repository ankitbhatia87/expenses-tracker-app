import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [showForm, setFormVisibility] = useState(false);
  let expenseContent = null;
  const handleAddNewExpenseClick = () => {
      setFormVisibility(true);
  };
  const handleCancelFormClick = () => {
      setFormVisibility(false);
  }
  const saveExpenseHandler = payload => {
    props.onAddExpense(payload);
    setFormVisibility(false);
  }
  expenseContent = showForm ? (
    <ExpenseForm onAddExpense={saveExpenseHandler} onCancelFormClick={handleCancelFormClick} />
  ) : (
    <button type="button" onClick={handleAddNewExpenseClick}>
      Add New Expense
    </button>
  );
  return <div className="new-expense">{expenseContent}</div>;
};

export default NewExpense;
