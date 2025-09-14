import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { useEffect } from 'react';
import SocketContext from '../context/socket.jsx';

const Room = () => {
    const { roomID } = useParams();
    const socket = useContext(SocketContext);

    useEffect(()=>{
        socket.emit("join-Room", {roomID});
    },[])

  return (
    <div>
        <h1 className='text-3xl font-bold'>Welcome to Room: {roomID}</h1>
    </div>
  )
}

export default Room
