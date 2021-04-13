import ExpenseItem from "../ExpenseItem/ExpenseItem";

function Expenses(props) {
  return (
    <div>
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
    </div>
  );
}

export default Expenses;
