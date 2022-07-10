import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BankTransactions } from '../../models/transactions'
import BankAccounts from '../bankAccount/bank-account';


function Account0() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<BankTransactions>()
  
 
  useEffect(() => {
    loadTransactions()
  }, [])

  async function loadTransactions() {
    setLoading(true)
    const r = await axios({
      method: 'get',
      url: 'http://localhost:3001/api/transactions',
    })
    setData(r.data as BankTransactions)
    console.log(r.data.banks.length, 'banks')
    setLoading(false)
  }
  
  return (
    <div className="App">      
      {loading && <p>loading data</p>}
      {data && data.banks.map((bank, bankIndex) => (
        <div key={bankIndex}>
          <p>{bank.bankName}</p>
          <p>{bank.address.text}</p>
          {bank.bankAccounts.map((bankAccount, bankAccountIndex) => {
            if(bankAccount.id === 0){
            return <BankAccounts key={bankAccountIndex} bankAccounts={bankAccount} />     
          }
          return ;
          }
          )}
        </div>
      ))}
    </div>
  );
}

export default Account0;
