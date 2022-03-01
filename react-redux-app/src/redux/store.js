import { createStore, combineReducers, applyMiddleware } from "redux";
import todoReducer from "./todo";
// Action => Store => { Middleware => Reducer => State } => View => Action
const reducer = combineReducers({
  todo: todoReducer,
});

// function myMiddleware(store) {
//   return function (next) {
//       return function(action){

//       }
//   };
// }
const myMiddleware = store => next => action =>{
    console.log('Action test', action, store.getState());
    if(action.type === 'ADD_TODO' && action.payload === 'fuck'){
        action.payload = '****'
    }
    return next(action); // truyen qua middleware tiep theo | middleware cuoi cung -> dispacth
    // dung de xu ly data tu server ve: api
}

export default createStore(
  reducer,
  applyMiddleware(myMiddleware)
  
);
