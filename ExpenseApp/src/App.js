import React from 'react';
import Header from './Components/Header';
import Banlace from './Components/Banlace';
import Incomeexpenses from './Components/Incomeexpenses';
import Transactionlist from './Components/Transactionlist';
import Addtransaction from './Components/Addtransaction';
import './App.css';
import { GlobalProvider } from './Context/Globalcontext';

function App() {
  return (
    <GlobalProvider>
    <div>
        <Header/>
        <Banlace/>
        <Incomeexpenses/>
        <Transactionlist/>
        <Addtransaction/>
    </div>
    </GlobalProvider>
  )
}

export default App
