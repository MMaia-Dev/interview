import React from "react";
import { Table } from "semantic-ui-react";
import { StatementAnalysis } from "../../models/transactions";

interface IStatementAnalysis{
    statements : StatementAnalysis;
}

function GroupTransactions (props : IStatementAnalysis){

    return(
           
     <div style={{display: "flex"}}>            
            <Table  celled striped>            
            <Table.Body>            
            {props.statements.analysisCategory.transactionGroups.map((transactionGroup, transactionGroupINdex) => {            
            const analysisTotal = transactionGroup.analysisPoints.find(point => point.name === 'totalAmount' || point.name === 'totalAmountDebits' )
                if(analysisTotal){                
                    return (
                
                        <Table.Row key={transactionGroupINdex}>
                        <Table.Cell >{transactionGroup.name}</Table.Cell>
                        <Table.Cell style={{width:"50%"}}>{analysisTotal?.value}</Table.Cell>                                 
                        </Table.Row>           
                
                    )
                }
            })}
            </Table.Body>
            </Table> 
     </div>
          
    )

}

export default GroupTransactions;