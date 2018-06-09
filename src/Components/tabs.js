import React, { Component } from 'react'
import { Paper, Tabs, Tab, AppBar } from '@material-ui/core';
import Transactions from '../Container/Presentational/TransactionContainer'
import CashTrx from '../Container/Presentational/CashTransactionContainer'

export default class TabHeader extends Component{
  state = {
    value: '',
    trans: [],
    cash:[],
    budget: []
  }

  componentDidMount(){

    const trxUrl = "http://localhost:4001/transaction/"
    const cashUrl = "http://localhost:4001/cash/"
    const budgetUrl = "http://localhost:4001/budget/"
    const fetchObj = {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'GET'
    }

    fetch(trxUrl, fetchObj)
      .then(res => res.json())
      .then(
        (transactions)=>{
        this.setState({trans: transactions, value: 0})
    })
  
    fetch(cashUrl, fetchObj)
      .then(res => res.json())
      .then(
        (cashes)=>{
        this.setState({cash: cashes})
    })

    fetch(budgetUrl, fetchObj)
      .then(res => res.json())
      .then(
        (budgetItems)=>{
        this.setState({budget: budgetItems})
    })

  }


  handleChange = (e, value)=>{
    this.setState({ value })
  }

  render(){
    const {value} = this.state
    return (
      <div>
        <AppBar position="static" style={{background: "#303030ae"}}>
        <Tabs
          value = {value}
          indicatorColor="secondary"
          onChange={this.handleChange}
          centered={true}
          fullWidth={true}
        >
          <Tab label="Main" />
          <Tab label="Cash" />
          <Tab label="Budget" />
          <Tab label="Reconciliation" />
        </Tabs>
        </AppBar>
      <Paper style={{width:'96%', marginLeft: '2%'}}>
      {/* TODO: Add props to pass down table values */}
        {value === 0 && <Transactions data={this.state.trans} />}
        {value === 1 && <CashTrx data={this.state.cash} />}
        {value === 2 && <Paper> Great </Paper>}
        {value === 3 && <Paper> Let's Recon </Paper>}
      </Paper>
      </div>
    )}
}