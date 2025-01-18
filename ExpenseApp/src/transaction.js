import React from 'react'

function Transaction({Transaction}) {
    const sign = Transaction.amount < 0 ? '-':'+';
  return (
<li className= {Transaction.amount < 0 ? 'min' : 'plus'} > 
            cash <span>{sign}${Transaction.amount}</span><button className = "delete-btn">X</button>
        </li>
  )
}

export default Transaction
