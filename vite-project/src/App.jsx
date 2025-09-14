import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { SocketProvider } from './context/socket.jsx'


function App() {
  

  return (
    <>
      <SocketProvider>
        <div className='bg-amber-200'>Hello</div>
      </SocketProvider>
    </>
  )
}

export default App
