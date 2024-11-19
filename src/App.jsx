import React from 'react';
import {Header} from './components/header/Header'
import{Balance} from './components/balance/Balance'
import {IncomeExpenses} from './components/incomeExpenses/IncomeExpenses'
import {TransactionList} from './components/transactionList/TransactionList'
import AddTransaction from './components/addTransactions/AddTransactions'
import GlobalProvider from './context/GlobalState'

import './App.css';
// import Calendar from 'react-calendar';

function App() {
  return (
    <div>
    <div className='App'> 
    <GlobalProvider>
    <Header/>
    <div className="container">
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
    </div>
    {/* <Calendar/> */}

    </GlobalProvider>

   
    </div>
    </div>
  );
}

export default App;