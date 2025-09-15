import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { useEffect } from 'react';
import SocketContext from '../context/socket.jsx';
import UserMedia from '../components/UserMedia.jsx';

const Room = () => {
    const { roomID } = useParams();
    const {socket,user,stream,peers} = useContext(SocketContext);

    useEffect(()=>{
       if(user) socket.emit("join-Room", { roomID, peerID: user.id });
    },[roomID,user,socket])

  return (
    <div>
        <h1 className='font-bold'>Welcome to Room: {roomID}</h1>
        <h1 className='font-bold'>Your Feed</h1>
        <UserMedia stream={stream}/>

        <div>
            <h1 className='font-bold'>Other Peers</h1>
            {Object.keys(peers).map((peerID)=>{
                if(peerID === user.id) return null;
                return (
                    <div key={peerID}>
                        <h2 className='font-semibold'>Peer: {peerID}</h2>
                        <UserMedia  stream={peers[peerID].stream}/>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Room
