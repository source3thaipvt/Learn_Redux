import callApi from '../api/callApi';

const initState = {
  items: [],
};
const ADD_TODO = "ADD_TODO";
const SET_TODO = "SET_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});
export const setTodos = (items)=>({
  type: SET_TODO,
  payload: items
})
export const fetchTodos = () => async (dispatch) => {
  // setup 	npm install -g json-server
  // create db.json
  // json-server --watch db.json
  const res = await callApi(
    'GET', 
    'todos',
     null
  ).then(res=>{
    console.log(res.data);
    dispatch(setTodos(res.data));
  })
    
}
 const reducer = (state = initState, action) => {
   console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, {title: action.payload}],
      };
      case SET_TODO:
      return {
        ...state,
        items:  action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
