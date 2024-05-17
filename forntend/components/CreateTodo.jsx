import React, { useState } from "react";

export default function CreateTodo({ onTodoAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error("Failed to create todo");
      }

      const data = await response.json();
      onTodoAdded(data.todo); // Call the callback function with the new todo
      setTitle("");
      setDescription("");
      alert("Todo added");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div className="App-Createtodo">
      <div className="input">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="button">
        <button onClick={handleAddTodo}>
          Add to Todo
        </button>
      </div>
    </div>
  );
}
