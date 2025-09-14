import { io } from "socket.io-client";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create a context
const SocketContext = createContext(null);

// Create the socket instance
const socket = io("http://localhost:5000", {
  autoConnect: true,
});

export const SocketProvider = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen only once when component mounts
    socket.on("room-Created", ({ roomId }) => {
      console.log("Room ID received:", roomId);
      navigate(`/room/${roomId}`);
    });

    // cleanup
    return () => {
      socket.off("room-Created");
    };
  }, [navigate]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
