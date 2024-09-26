import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-900'>
      <div className='fixed top-0 w-screen z-10'>

    <Navbar></Navbar>
      </div>
    <div className=' mt-16 '>
    <Home></Home>
    </div>
    </div>
    </>
  )
}

export default App
