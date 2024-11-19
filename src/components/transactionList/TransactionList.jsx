import React, { useContext } from 'react';
import './TransactionList.css'
import { Transaction } from '../transaction/Transaction';

import { GlobalContext } from '../../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h2 className='history-head'>History</h2>

      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
      
    </>
  )
}