import {combineReducers} from 'redux';
//JS default parmaeter relates to the state = []
// this is an ES6 thing that sets state to an empty array when undefined
// the data type can be anything, it's just setting the default value when somehting is incorrectly passed
const transaction = (state = [], action)=>state

const rootReducer = combineReducers({
  transaction
});
export default rootReducer