import React from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    
  return (
    <>
        <h3>History</h3>
        <ul id ="list" class="list">
            <li className='minus'>
                Cash <span>-$400</span><button className='delete-btn'>x</button>
            </li>
        </ul>
    </>
  )
}