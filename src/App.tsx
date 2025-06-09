import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  )
}

export default App
