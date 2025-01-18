import React , {useContext}from 'react'
import { Globalcontext } from '../Context/Globalcontext'
import Transaction from './Transaction';

function Transactionlist() {
  const {transactions}= useContext(Globalcontext);
  return (
    <div>
      <h3>History</h3>
      <ul id='list' className ='list'>
        {transactions.map(transactions =>(<Transaction key={Transaction.id} Transaction={Transaction}/> ))}
       
      </ul>
    </div>
  )
}

export default Transactionlist
