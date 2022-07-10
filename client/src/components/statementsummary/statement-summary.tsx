import React from "react";
import { StatementAnalysis } from "../../models/transactions";

interface IStatementAnalysis{
    statements : StatementAnalysis;
}

function BankStatement (props : IStatementAnalysis){

    return(
            /*bank statement component */
           <div> 
            <p>-- statement --</p>
            {props.statements.analysisCategory.transactionGroups.map((transactionGroup, transactionGroupINdex) => {            
            const analysisTotal = transactionGroup.analysisPoints.find(point => point.name === 'totalAmount')
            return <div key={transactionGroupINdex}><p> {transactionGroup.name}</p> <p> Toltal Amount: {analysisTotal?.value}</p></div>
            })}
            </div>
          /*bank statement component */
    )

}

export default BankStatement;