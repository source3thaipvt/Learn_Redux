// co nhiem vu ket noi
import { connect } from "react-redux";
import axios from 'axios';
import TodoApp from '../component/TodoApp'
import { addTodo, setTodos } from "../redux/todo";
const mapStateToProps = (state) => ({
  todos: state.todo.items
});
const mapActionToProps = dispatch=> ({
  addTodo: (text) => dispatch(addTodo(text)),
  setTodos: (items) =>dispatch(setTodos(items)),
  fechtTodos: async () => {
    // setup 	npm install -g json-server
    // create db.json
    // json-server --watch db.json
    const res = await axios.get('http://localhost:3000/todos').then(res=>{
      console.log(res.data);
      dispatch(setTodos(res.data));
    });
  }
});

export default connect(mapStateToProps, mapActionToProps)(TodoApp);
// return component
