import React, { useState, useEffect } from "react";

export default function TodoApp({ todos , addTodo, fechtTodos}) {
  const [text, setText] = useState("");
  useEffect(()=>{
    
    fechtTodos()

  },[fechtTodos])
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
