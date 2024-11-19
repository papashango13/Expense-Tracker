import React, { useContext } from 'react';
import './IncomeExpenses.css';
import { GlobalContext } from '../../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div className="inc-content">
        <h4>Income</h4>
        <p className="income">{income}</p>
      </div>
      <div className="exp">
        <h4>Expense</h4>
        <p className="expense">{expense}</p>
      </div>
    </div>
  );
};