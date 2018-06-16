import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class DataTable extends Component{

  render(){
    // const TRX = this.props.loadTransactions
    const TRX = this.props.data
    // const test = this.props.trx
    // console.log(TRX)

    const transactionHeader = Object.keys(TRX[0]).map((trx,i)=>{
      return <TableHeaderColumn key={i}>{trx.toUpperCase()}</TableHeaderColumn>
    })

    const transactionData = TRX.map((trx,i)=>{
      return (
        <TableRow key={trx._id}>
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

export default DataTable
