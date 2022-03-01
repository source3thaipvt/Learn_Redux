// co nhiem vu ket noi
import { connect } from "react-redux";

import TodoApp from '../component/TodoApp'
import { addTodo, setTodos } from "../redux/todo";
const mapStateToProps = (state) => ({
  todos: state.todo.items
});
const mapActionToProps = {
  addTodo: addTodo,
  setTodos
};

export default connect(mapStateToProps, mapActionToProps)(TodoApp);
// return component
