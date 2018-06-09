import { connect } from 'react-redux'
import Transactions from '../../Components/table'

const msp = state =>{return{transaction:state.transaction}}

// const mdp = dispatch =>{
//   return({
//     loadTransactions: (id)=>dispatch(loadTransactions(id))
//   })
// }

const TransactionsContainer = connect(msp)(Transactions)

export default TransactionsContainer