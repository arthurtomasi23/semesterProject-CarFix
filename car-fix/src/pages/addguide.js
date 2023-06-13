import React from "react";
import Sidebar from "../components/Sidebar";
import HomeScreen from "../components/HomeScreen";

const App = () => {
  return (
    <Flex >
      <HomeScreen />
        <Flex >
          <Sidebar />
        </Flex >
    </Flex>
  );
};

export default App;