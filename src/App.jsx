import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { Navbar } from './component/Navbar'
import { Home } from './component/Home'
import { Login } from './component/Login'
import { Signup } from './component/Signup'
import { Routes, Route } from 'react-router-dom'
import Api from './component/Api'
function App() {

  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path="/Api" element={<Api/>}></Route> */}
        {/* <Route path="/" element={<Signup/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} /> */}
        
      {/* </Routes> */}
      {/* <Api /> */}
      <Signup />
    </>
  )
}


export default App
