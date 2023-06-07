import React from "react";
import Sidebar from "../components/Sidebar";
import HomeScreen from "../components/HomeScreen";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <HomeScreen />
      </div>
    </div>
  );
};

export default App;