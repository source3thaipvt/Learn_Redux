const { createStore } = require("redux");
// combineReducers //chia nho: quan ly cac arr nho( products, cart) < reducer rieng >

const reducer = require('./reducers')

const store = createStore(reducer);
console.log(store.getState())



const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";

// const initState = {
//     product: {
//         items: []
//     },
//     cart: {
//         items: [],
//         total: 0
//     }
// };


// const reducer = (state = initState, action) =>{
//     switch(action.type){
//         case ADD_TO_CART:

//         case REMOVE_FROM_CART:

//         case FETCH_PRODUCTS_SUCCESS:

//         case FETCH_PRODUCTS_FAIL:

//         default: return state;
//     }
// }
