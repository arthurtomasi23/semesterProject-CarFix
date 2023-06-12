import React from "react";
import Sidebar from "../components/Sidebar";
import StepByStep from "../components/Stepbytest";


const App = () => {
  return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <StepByStep />
        </div>
      </div>
  );
};

export default App;
