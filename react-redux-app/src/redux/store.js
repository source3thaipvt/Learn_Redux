import {createStore, combineReducers} from 'redux';
import todoReducer from './todo'

const reducer = combineReducers({
    todo : todoReducer
})
export default createStore(reducer)