import React from "react";

export default function Todo({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.status ? "completed" : "Mark as completed"}</button>
        </div>
      ))}
    </div>
  );
}
