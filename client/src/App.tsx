import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BankTransactions } from './models/transactions';


function App() {
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
      <header className="App-header">
      </header>
      {loading && <p>loading data</p>}
      {data && data.banks.map((bank, bankIndex) => (
        <div key={bankIndex}>
          <p>{bank.bankName}</p>
          <p>{bank.address.text}</p>
          {bank.bankAccounts.map((bankAccount, bankAccountIndex) => (
            /*<BankAccount bankAccount={bankAccount} /> */
            /*bank account component */
            <div key={bankAccountIndex}>
              <p>-- bank account --</p>
            <p>{bankAccount.accountName}</p>
            <p>account number: {bankAccount.accountNumber}</p>
            <p>statement summary</p>
            <p>account movement: {bankAccount.statementSummary.accountMovement}</p>
            {/* list summary properties */}
            {bankAccount.statementAnalysis.map((statement, statementIndex) => (
              /*<BankStatement bankStatement={bankStatement} /> */
              /*bank statement component */
              <div key={statementIndex}>
                <p>-- statement --</p>
              <p>{statement.analysisCategory.name}</p>
{statement.analysisCategory.transactionGroups.map((transactionGroup, transactionGroupINdex) => {
  const analysisTotal = transactionGroup.analysisPoints.find(point => point.name == 'totalAmount')
  return <p key={transactionGroupINdex}>{analysisTotal?.value}</p>
})}
              </div>
              /*bank statement component */
            ))}
            </div>
            /*bank account component end */
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
