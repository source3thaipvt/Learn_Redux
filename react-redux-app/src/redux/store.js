import { createStore, combineReducers, applyMiddleware } from "redux";
// giai phap thay the store redux cu||tich hop san: thunk, middleware
// || code ngan gon hon
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import todoReducer from "./todo";
import authReducer from "./auth";
// giai phap thay the async fetch dispatch
import thunk from "redux-thunk";

// Luu state redux vao store
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // chi luu data can
};

// function myMiddleware(store) {
//   return function (next) {
//       return function(action){ }
//   };
// }

const myMiddleware = (store) => (next) => (action) => {
  console.log("Action test", action, "getState", store.getState());
  // action la 1 function
  if (action.type === "ADD_TODO" && action.payload === "fuck") {
    action.payload = "****";
  }
  return next(action); // truyen qua middleware tiep theo | middleware cuoi cung -> dispacth
  // dung de xu ly data tu server ve: api
};

// const asyncMiddleware = store => next => action=>{
//   console.log('Async',action) // la 1 function
//   if(typeof action === 'function'){
//     return action(next); // truyen vao action() dispacht la next
//   }
//   return next(action)
// }

const logger = createLogger();

// export default createStore(
//   reducer,
//   applyMiddleware(logger, thunk, myMiddleware)
// );

// Action => Store => { Middleware => Reducer => State } => View => Action
const reducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  // add middleware custom your
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myMiddleware),
});
export const persistor = persistStore(store);
export default store;
