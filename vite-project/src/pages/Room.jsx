import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { useEffect } from 'react';
import SocketContext from '../context/socket.jsx';
import UserMedia from '../components/UserMedia.jsx';

const Room = () => {
    const { roomID } = useParams();
    const {socket,user,stream} = useContext(SocketContext);

    useEffect(()=>{
       if(user) socket.emit("join-Room", { roomID, peerID: user.id });
    },[roomID,user,socket])

  return (
    <div>
        <h1 className='font-bold'>Welcome to Room: {roomID}</h1>
        <UserMedia stream={stream}/>

    </div>
  )
}

export default Room
