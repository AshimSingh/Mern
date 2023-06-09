import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from './components/navbar'
import Signin from './pages/SignIn'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Register from './pages/Register'
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
   
      <Route path="/signup" element={<Register/>} />
      <Route path="/signin" element={<Signin/>} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
