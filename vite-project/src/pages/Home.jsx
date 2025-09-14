import React from "react";
import CreateRoom from "../components/createRoom.jsx";
const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="h-96 w-96 flex items-center justify-center">
        <CreateRoom />
      </div>
    </div>
  );
};

export default Home;
