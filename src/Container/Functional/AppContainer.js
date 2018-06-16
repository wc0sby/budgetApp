import { connect } from 'react-redux'
import App from '../../App'
import {loadMain} from '../../Redux/Actions/mainTrxActions'
import {loadCash} from '../../Redux/Actions/cashTrxActions'
import {loadBudget} from '../../Redux/Actions/budgetTrxActions'

//map dispatch to props for fetch calls
const mdp=(dispatch)=>{
  return{
    fetchMain: ()=>dispatch(loadMain()),
    fetchCash: ()=>dispatch(loadCash()),
    fetchBudget: ()=>dispatch(loadBudget())
  }
}

export default connect(null, mdp)(App)