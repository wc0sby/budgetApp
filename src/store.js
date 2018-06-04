import {createStore} from 'redux'
import state from './state'
import reducers from './Reducers'
let store = createStore(reducers,state)

export default store