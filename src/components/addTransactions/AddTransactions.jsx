import React, {useState, useContext} from 'react'
import './AddTransactions.css'
import { GlobalContext } from '../../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(newTransaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));

    setText('');
    setAmount('');
  }

  return (
    <>
       <div className='addTransaction'>
      <div className='addTransaction-title'>Add new transaction</div>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <div className='label' htmlFor="text"> Text</div>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
        </div>
        <div className="form-control">
          <label htmlFor="amount" className='label'
            >Amount
            </label>
            Income = (negative) - (expense) br Expense = (positive) - (income)
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
          
        </div>
        <button className="btn">Add transaction</button>
        
      </form>
      </div>
    </>
  )
}
export default AddTransaction;

