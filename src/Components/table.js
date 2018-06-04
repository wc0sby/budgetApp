import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import NavBar from './nav';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {selectTRX} from '../Actions/index'

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class Transactions extends Component{
  render(){
    const TRX = this.props.transaction

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

const mapStateToProps = state =>{return{transaction:state.transaction}}

// const matchDispatchToProps = dispach =>{return{bindActionCreators({selectTRX: selectTRX},dispach)}}

const TransactionsContainer = connect(mapStateToProps)(Transactions)

export default TransactionsContainer
