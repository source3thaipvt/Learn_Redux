import React, { useState, useEffect } from "react";
import axios from 'axios';
export default function TodoApp({ todos ,setTodos, addTodo}) {
  const [text, setText] = useState("");
  useEffect(()=>{
    // setup 	npm install -g json-server
    // create db.json
    // json-server --watch db.json
    axios.get('http://localhost:3000/todos').then(res=>{
      console.log(res.data);
      setTodos(res.data);
    });

  },[setTodos])
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={()=> {
        addTodo(text);
        setText('')
        }}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
