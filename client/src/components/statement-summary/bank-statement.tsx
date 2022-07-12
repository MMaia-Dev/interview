import React from "react";
import {  StatementSummary } from "../../models/transactions";
import {  Table } from "semantic-ui-react";

interface IBankStatement{
    statement : StatementSummary;
}

function BankStament (props : IBankStatement) {

    return(
   
   <div style={{width: "50%"}}>
    <Table celled striped>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Statement Summary</Table.HeaderCell>                
                    <Table.HeaderCell>Value</Table.HeaderCell>                
                    </Table.Row>
                </Table.Header>

                <Table.Body>                   
                    <Table.Row >
                        <Table.Cell style={{width: "50%"}}>Opening Balance</Table.Cell>
                        <Table.Cell>{props.statement.openingBalance}</Table.Cell>                                  
                    </Table.Row> 
                    <Table.Row >
                        <Table.Cell>Total Credits</Table.Cell>
                        <Table.Cell>{props.statement.totalCredits}</Table.Cell>                                  
                    </Table.Row>        
                    <Table.Row >
                        <Table.Cell>Total Debits</Table.Cell>
                        <Table.Cell>{props.statement.totalDebits}</Table.Cell>                                  
                    </Table.Row>    
                    <Table.Row >
                        <Table.Cell>Closing Balance</Table.Cell>
                        <Table.Cell>{props.statement.closingBalance}</Table.Cell>                                  
                    </Table.Row>  
                    <Table.Row >
                        <Table.Cell>Min. Balance</Table.Cell>
                        <Table.Cell>{props.statement.minBalance}</Table.Cell>                                  
                    </Table.Row>  
                    <Table.Row >
                        <Table.Cell>Min. Day End Balance</Table.Cell>
                        <Table.Cell>{props.statement.minDayEndBalance}</Table.Cell>                                  
                    </Table.Row>     
                    <Table.Row >
                        <Table.Cell>Days in Negative</Table.Cell>
                        <Table.Cell>{props.statement.daysInNegative}</Table.Cell>                                  
                    </Table.Row>  
                    <Table.Row >
                        <Table.Cell>Search Period Start</Table.Cell>
                        <Table.Cell>{props.statement.searchPeriodStart}</Table.Cell>                                  
                    </Table.Row> 
                    <Table.Row >
                        <Table.Cell>Search Period End</Table.Cell>
                        <Table.Cell>{props.statement.searchPeriodEnd}</Table.Cell>                                  
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell>Transactions StartDate</Table.Cell>
                        <Table.Cell>{props.statement.transactionsStartDate}</Table.Cell>                                  
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell>Transactions EndDate</Table.Cell>
                        <Table.Cell>{props.statement.transactionsEndDate}</Table.Cell>                                  
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell>Credits Categorised</Table.Cell>
                        <Table.Cell>{props.statement.creditsCategorised}</Table.Cell>                                  
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell>Credits Uncategorised</Table.Cell>
                        <Table.Cell>{props.statement.creditsUncategorised}</Table.Cell>                                  
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell>Debits Categorised</Table.Cell>
                        <Table.Cell>{props.statement.debitsCategorised}</Table.Cell>                                  
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell>Debits Uncategorised</Table.Cell>
                        <Table.Cell>{props.statement.debitsUncategorised}</Table.Cell>                                  
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell>Internal TransferDebits</Table.Cell>
                        <Table.Cell>{props.statement.internalTransferDebits}</Table.Cell>                                  
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell>internalTransfer Credits</Table.Cell>
                        <Table.Cell>{props.statement.internalTransferCredits}</Table.Cell>                                  
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell>Account Movement</Table.Cell>
                        <Table.Cell>{props.statement.accountMovement}</Table.Cell>                                  
                    </Table.Row>
                </Table.Body>
                </Table>

   </div>

    )

}

export default BankStament;