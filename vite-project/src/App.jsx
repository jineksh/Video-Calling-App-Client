import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { SocketProvider } from './context/socket.jsx'
import Home from './pages/Home.jsx';
import Room from './pages/Room.jsx';
import { Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
      <SocketProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomID" element={<Room />} />
        </Routes>
      </SocketProvider>
    </>
  )
}

export default App
