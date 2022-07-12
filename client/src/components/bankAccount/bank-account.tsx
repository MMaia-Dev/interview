import React from "react";
import { BankAccount } from "../../models/transactions";
import GroupTransactions from "../grouptransactions/group-transactions";
import {  Table } from "semantic-ui-react";
import BankStament from "../statement-summary/bank-statement";

interface IBankAccount{
    bankAccounts : BankAccount;
}

function BankAccounts (props : IBankAccount) {

    return(

        <div>  
            <Table celled striped>
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Account Holder</Table.HeaderCell>
                <Table.HeaderCell>Account Number</Table.HeaderCell>
                <Table.HeaderCell>Account Holder Type</Table.HeaderCell>
                <Table.HeaderCell>Account Type</Table.HeaderCell>
                <Table.HeaderCell>Current Balance</Table.HeaderCell>
                <Table.HeaderCell>Available Balance</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>            
                    <Table.Row >
                    <Table.Cell>{props.bankAccounts.accountHolder}</Table.Cell>
                    <Table.Cell>{props.bankAccounts.accountNumber}</Table.Cell>
                    <Table.Cell>{props.bankAccounts.accountHolderType}</Table.Cell>
                    <Table.Cell>{props.bankAccounts.accountType}</Table.Cell>
                    <Table.Cell>{props.bankAccounts.currentBalance}</Table.Cell>
                    <Table.Cell>{props.bankAccounts.availableBalance}</Table.Cell>                  
                    </Table.Row>           
            </Table.Body>
            </Table>           
            <div style={{display: "flex", justifyContent : "space-evenly"}}>

             < BankStament statement={props.bankAccounts.statementSummary}/>              
                <div style={{display: "flex", flexDirection: "column", width:"40%"}}>
                    <Table style={{ marginBottom : "1px" }} celled striped >
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell style={{width:"50%"}}>Grouped Transaction</Table.HeaderCell>
                        <Table.HeaderCell>Total Amount</Table.HeaderCell>                
                        </Table.Row>
                    </Table.Header>           
                    </Table>         
                    {props.bankAccounts.statementAnalysis.map((statement, statementIndex) => (
                            <GroupTransactions key={statementIndex} statements={statement} /> 

                        
                        ))}            
                </div>
            </div>
            
        </div>
    )

}
export default BankAccounts;