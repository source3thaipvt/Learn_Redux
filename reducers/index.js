const { createStore, combineReducers } = require("redux");
const productReducer = require('./product')
const cartReducer = require('./cart')

const reducer = combineReducers({
    product: productReducer,
    cart: cartReducer
});
module.exports = reducer;