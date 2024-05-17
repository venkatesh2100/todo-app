import React, { useState, useEffect } from 'react';
import './App.css';
import CreateTodo from '../components/CreateTodo';  
import Todo from '../components/Todo';  
function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        // console.log('Fetched todos:', json);  
        setTodos(json.todo);  
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  console.log('Todos state:', todos);

  return (
    <div>
      <h1>CS50 Final Project</h1>
      <CreateTodo />
      <Todo todos={todos} />
    </div>
  );
}

export default App;
