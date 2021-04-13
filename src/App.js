import React from 'react';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(2021, 0, 12),
      title: "Toilet Paper",
      amount: 29.14
    },
    {
      id: "e2",
      date: new Date(2021, 1, 23),
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
      date: new Date(2021, 3, 7),
      title: "Groceries",
      amount: 45
    },
  ]
  return (
    <div>
      <Expenses expenseList={expenses} />
    </div>
  );
}

export default App;
