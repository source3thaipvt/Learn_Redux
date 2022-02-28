import React, { useState } from "react";

export default function TodoApp({ todos , addTodo}) {
  const [text, setText] = useState("");
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
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
