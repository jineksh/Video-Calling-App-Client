import { io } from "socket.io-client";
import { createContext } from "react";

// Create a context
const SocketContext = createContext(null);

// Create the socket instance (but don’t auto-connect)
const socket = io("http://localhost:5000", {
  autoConnect: true,
});

// Context provider
export const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default socket;
