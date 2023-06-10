import React from "react";
import Sidebar from "../components/Sidebar";
import StepByStep from "../components/StepByStep";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <StepByStep />
        </div>
      </div>
    </ChakraProvider>
  );
};

export default App;
