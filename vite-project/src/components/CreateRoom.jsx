import React from "react";
import SocketContext from "../context/socket.jsx";
import { useEffect } from "react";

const CreateRoom = () => {
    const socket = React.useContext(SocketContext);

    const handleClick = () => {
        socket.emit("create-Room");
    };

    

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-2xl font-bold text-shadow-zinc-300">Create Room</h1>
            <button
                onClick={handleClick}
                className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md 
                   hover:bg-blue-700 hover:shadow-lg 
                   active:scale-95 transition-all duration-200"
            >
                Create  Room for the New Meeting
            </button>
        </div>
    );
};

export default CreateRoom;
