import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class DataTable extends Component{
  render(){
    const TRX = this.props.data
    //remove the version and id from client's view and map the new array
    const columns = Object.keys(TRX[0]).filter((trx)=>{
      return trx !== '_id' && trx !=='__v'
    })
    console.log(columns);

    const transactionHeader = columns.map((trx, i)=><TableHeaderColumn key={i}>{trx.toUpperCase()}</TableHeaderColumn>)

    const dateFormatter =(date)=>{
      const trxDate = new Date(date)
      return `${trxDate.getMonth()+1}/${trxDate.getDate()+1}/${trxDate.getFullYear()}`
    }

    const transactionData = TRX.map((trx,i)=>{
      return (
        <TableRow key={i}>
        {columns.map((colName) => <TableRowColumn>{trx[colName]}</TableRowColumn>)}
        </TableRow>
      )
    })
    return (
      <div>
        <Table 
          fixedHeader={true}
          height={'300px'}
          onRowSelection={(row)=>this.props.deleteRow(TRX[row]._id)}
        >
          <TableHeader displaySelectAll={false} style={{color:'red'}}>
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
