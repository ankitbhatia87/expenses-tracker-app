import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  let expenseContent = null;
  const handleAddNewExpenseClick = () => {
      props.onAddNewExpense();
  };
  expenseContent = props.formVisibility ? (
    <ExpenseForm onAddExpense={props.onAddExpense} />
  ) : (
    <button type="button" onClick={handleAddNewExpenseClick}>
      Add New Expense
    </button>
  );
  return <div className="new-expense">{expenseContent}</div>;
};

export default NewExpense;
