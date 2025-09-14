import React from 'react'
import SocketContext from '../context/socket.jsx' 
const CreateRoom = () => {

    const socket = React.useContext(SocketContext);
    const handleClick = () =>{
        socket.emit("create-room");
    }

  return (
    <div>
        <h1>Create Room</h1>
        <button onClick={()=>handleClick}>Create Room</button>
    </div>
  )
}

export default CreateRoom
