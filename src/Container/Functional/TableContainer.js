import { connect } from 'react-redux'
import Table from '../../Components/table'
import { deleteMainTrx } from '../../Redux/Actions/mainTrxActions'


const mdp = (dispatch)=>{
  return{
    deleteRow: (trx)=>dispatch(deleteMainTrx(trx))
  }
}

export default connect(null, mdp)(Table)

