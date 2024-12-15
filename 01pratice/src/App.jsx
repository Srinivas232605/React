import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React course with ritesh</h1>
      <h2>Counter value:</h2>
      <button>Add Value</button>{"  "}
      <button>Remove value</button>
      <p>footer: </p>
    </>
  )
}

export default App
