import { useState } from 'react'
import './App.css'
import CreateTodo from '../components/CreateTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <App>
      <h1>Solo Daily Tasks</h1>
      <CreateTodo/>
    </App>
  )
}

export default App
