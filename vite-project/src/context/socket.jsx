import { io } from "socket.io-client";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import peer from "peerjs";
import { v4 as uuidV4 } from "uuid"
import { useState } from "react";
import { useReducer } from "react";
import { addPeerAction } from "../actions/peer.jsx";
import  { peerReducer } from "../reducers/peer.jsx";

// Create a context
const SocketContext = createContext(null);

// Create the socket instance
const socket = io("http://localhost:5000", {
  autoConnect: true,
});


export const SocketProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [stream, setStream] = useState();
  
const [peers, dispatch] = useReducer(peerReducer, {});

  const fetchUserMedia = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(mediaStream);
    }
    catch (err) {
      console.error("Error accessing media devices.", err);
    }
  }

   useEffect(()=>{
    if(user && stream){
         socket.on('user-Joined',({peerID})=>{
            const call = user.call(peerID,stream);
            console.log("Calling peer:",peerID);
            call.on('stream',()=>{
                dispatch(addPeerAction(peerID,stream));
            })
         })

         user.on('call',(call)=>{
            call.answer(stream);
            call.on('stream',()=>{
                dispatch(addPeerAction(call.peer,stream));
            })
         })
    }
    socket.emit('ready');
   },[user,stream])
   

useEffect(() => {
  const userId = uuidV4();
  const peerId = new peer(userId, {
    host: 'localhost',
    port: 9000,
    path: '/my-app'
  });
  setUser(peerId);
  fetchUserMedia();
  // Listen only once when component mounts
  socket.on("room-Created", ({ roomId }) => {
    console.log("Room ID received:", roomId);
    navigate(`/room/${roomId}`);
  });

  // cleanup
  return () => {
    socket.off("room-Created");
  };
}, []);



return (
  <SocketContext.Provider value={{ socket, user, stream , peers}}>
    {children}
  </SocketContext.Provider>
);
};

export default SocketContext;
