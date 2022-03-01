// co nhiem vu ket noi
import { connect } from "react-redux";

import TodoApp from '../component/TodoApp'
import { addTodo, setTodos, fetchTodos } from "../redux/todo";
const mapStateToProps = (state) => ({
  todos: state.todo.items
});
const mapActionToProps = dispatch=> ({
  addTodo: (text) => dispatch(addTodo(text)),
  setTodos: (items) =>dispatch(setTodos(items)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapActionToProps)(TodoApp);
// return component
