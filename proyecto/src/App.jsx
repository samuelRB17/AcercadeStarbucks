import { useState } from 'react'
import AboutStarbucks from "./AboutStarbucks";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <AboutStarbucks />
    </>
  )
}

export default App
