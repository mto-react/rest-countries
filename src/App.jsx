import { useState } from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App
