import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
// import NavBar from './nav';
import { connect } from 'react-redux'
// import {getTransactions} from '../Fetch/index'

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class Transactions extends Component{
  state = {
    trans: [{}]
  }

  componentDidMount(){

    const url = "http://localhost:4001/transaction/"
    const fetchObj = {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'GET'
    }

    fetch(url, fetchObj)
      .then(res => res.json())
      .then(
        (transactions)=>{
        this.setState({trans: transactions})
    })
  }

  render(){
    // const TRX = this.props.transaction
    const TRX = this.state.trans

    const transactionHeader = Object.keys(TRX[0]).map((trx,i)=>{
      return <TableHeaderColumn key={i}>{trx.toUpperCase()}</TableHeaderColumn>
    })

    const transactionData = TRX.map((trx,i)=>{
      return (
        <TableRow key={i}>
          <TableRowColumn>{trx._id}</TableRowColumn>
          <TableRowColumn>{trx.name}</TableRowColumn>
          <TableRowColumn>${trx.amount}</TableRowColumn>
          <TableRowColumn>{trx.date}</TableRowColumn>
          <TableRowColumn>{trx.category}</TableRowColumn>
          <TableRowColumn>{trx._v}</TableRowColumn>
        </TableRow>
      )
    })
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              {transactionHeader}
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactionData}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const msp = state =>{return{transaction:state.transaction}}

// const mdp = dispatch =>{
//   return({
//     loadTransactions: (id)=>dispatch(loadTransactions(id))
//   })
// }

const TransactionsContainer = connect(msp)(Transactions)

export default TransactionsContainer
