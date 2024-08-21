import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componets/home'
import { Footer } from './componets/footer'
import Header from './componets/header'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Outlet/>
     <Footer/>
    </>
  )
}

export default App
