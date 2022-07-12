import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarComponent from './components/navbar-component';
import 'semantic-ui-css/semantic.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BankTransactions } from './models/transactions';
import BankAccounts from './components/bankAccount/bank-account';

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
          
    <Router forceRefresh={true}>
      <NavbarComponent/>
      {loading && <p>loading data</p>}
        {data && data.banks.map((bank, bankIndex) => (
          <div key={bankIndex}>
            <h1 style={{textAlign: "center"}}>{bank.bankName}</h1>
            <h4 style={{textAlign: "center"}}>{bank.address.text}</h4>
            {bank.bankAccounts.map((bankAccount, bankAccountIndex) => {
            if(bankAccount.id === 0){
              return <Route path='/456789' >
                      <BankAccounts key={bankAccountIndex} bankAccounts={bankAccount} />  
                    </Route>       
            }
            if(bankAccount.id === 1){
              return <Route path='/945315' >
                      <BankAccounts key={bankAccountIndex} bankAccounts={bankAccount} />  
                    </Route>           
            }
            if(bankAccount.id === 2){
              return <Route path='/9452-1553-2345-7654' >
                      <BankAccounts key={bankAccountIndex} bankAccounts={bankAccount} />  
                    </Route>           
            }
            return
            }
          )}
          </div>
        ))} 
          
    </Router>
    
  );
}

export default App;
