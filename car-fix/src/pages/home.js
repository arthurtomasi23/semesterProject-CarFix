import React from "react";
import Sidebar from "../components/Sidebar";
import HomeScreen from "../components/HomeScreen";
import { Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <Flex>
      <Sidebar />

        <HomeScreen />

    </Flex>
  );
};

export default App;
