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
 const reducer = (state = initState, action) => {
   console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
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
