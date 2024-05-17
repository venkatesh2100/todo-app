import React from "react";

export default function CreateTodo() {
  return (
    <div className="App-Createtodo">
      <div className="input">
        
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
      </div>
      <div className="button">
        <button>Add to Todo</button>
      </div>
    </div>
  );
}
