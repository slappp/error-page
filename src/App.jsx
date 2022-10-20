import { useState } from 'react'
import './App.css'
import error from './assets/502.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <img src={error} class="img" alt="" />
      <div class="error-main">
        <div class="error-heading">
          <h1>502</h1>
        </div>
        <h2>Bad Gateway</h2>
      </div>
    </body>
  )
}

export default App
