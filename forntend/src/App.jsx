import { useState } from 'react'
import './App.css'
import CreateTodo from '../components/CreateTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>CS50 Final Project </h1>
      <CreateTodo/>
    </div>
  )
}

export default App
