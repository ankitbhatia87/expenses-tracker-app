import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const DEFAULT_EXPENSES = [
    {
      id: "e1",
      date: new Date(2021, 0, 12),
      title: "Toilet Paper",
      amount: 29.14
    },
    {
      id: "e2",
      date: new Date(2020, 1, 23),
      title: "New TV",
      amount: 599.23
    },
    {
      id: "e3",
      date: new Date(2021, 2, 5),
      title: "Car Fuel",
      amount: 50
    },
    {
      id: "e4",
      date: new Date(2019, 3, 7),
      title: "Groceries",
      amount: 45
    },
  ];
  const [expensesList, setExpenses] = useState(DEFAULT_EXPENSES);
  const [formVisibility, setFormVisibility] = useState(false);
  const addExpenseHandler = expense => {
    setFormVisibility(false);
    setExpenses(prevState => [expense, ...prevState]);
  }

  const addNewExpenseClickHandler = visibility => {
    setFormVisibility(true);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} formVisibility={formVisibility} onAddNewExpense={addNewExpenseClickHandler} />
      <Expenses expenseList={expensesList} />
    </div>
  );
}

export default App;
