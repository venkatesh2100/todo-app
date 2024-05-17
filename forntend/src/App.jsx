import React, { useState, useEffect } from 'react';
import './App.css';
import CreateTodo from '../components/CreateTodo';  
import Todo from '../components/Todo';  
import CurrentDateTime from '../components/TimeandDate';

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      const data = await response.json();
      setTodos(data.todos);  
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleStatusUpdate = async (todoId) => {
    try {
      const response = await fetch("http://localhost:3000/status", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: todoId }),
      });
      if (!response.ok) {
        throw new Error("Failed to update todo status");
      }
      
      const updatedTodos = todos.map(todo =>
        todo._id === todoId ? { ...todo, status: true } : todo
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error updating todo status:', error);
    }
  };

  const handleTodoAdded = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = async (todoId) => {
    try {
      const response = await fetch(`http://localhost:3000/todo/${todoId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }
  
      // Refetch todos after successful deletion
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div>
      <h1>CS50 Final Project</h1>
      <CurrentDateTime/>
      <CreateTodo onTodoAdded={handleTodoAdded} />
      <Todo 
        todos={todos} 
        handleMarkCompleted={handleStatusUpdate} 
        handleDeleteTodo={handleDeleteTodo} 
      />
    </div>
  );
}

export default App;
