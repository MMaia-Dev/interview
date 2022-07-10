import React from "react";
import { BankAccount } from "../../models/transactions";
import BankStatement from "../statementsummary/statement-summary";

interface IBankAccount{
    bankAccounts : BankAccount;
}

function BankAccounts (props : IBankAccount) {

    return(

        <div>              
            <p>-- bank account --</p>
            <p>{props.bankAccounts.accountName}</p>
            <p>account number: {props.bankAccounts.accountNumber}</p>
            <p>statement summary</p>
            <p>account movement: {props.bankAccounts.statementSummary.accountMovement}</p>
            {/* list summary properties */}
            {props.bankAccounts.statementAnalysis.map((statement, statementIndex) => (
              <BankStatement key={statementIndex} statements={statement} /> 
          
            ))}
            
        </div>
    )

}
export default BankAccounts;