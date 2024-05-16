import React from "react"


export default function CreateTodo(){
  return(
    <div>
      <input placeholder="Title" type="text"></input>
      <input placeholder="Description" type="text"></input>
      <button>Add todo</button>
    </div>
  )
}