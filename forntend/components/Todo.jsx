import React from "react";

export default function Todo({ todos, handleMarkCompleted, handleDeleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button onClick={() => handleMarkCompleted(todo._id)}>
            {todo.status ? "Completed" : "Mark as Completed"}
          </button>
          {todo.status && (
            <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
}
