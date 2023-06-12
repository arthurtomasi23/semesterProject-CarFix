import React from 'react';
import { Box, Flex, Text, Center } from '@chakra-ui/react';

const HomeScreen = () => {
  return (
  <Center>
    <Flex 
    flexDir="column"
    alignItems="center"
    justifyContent="center"
    backgroundImage="url(https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)"
    backgroundSize="cover"
    backgroundPosition="center"
    h="100%"
    >
      <Text
        fontSize="6xl"
        fontWeight="bold"
        textAlign="center"
        color="orange"
        mt="10"
        mb="10"
      >
        CARFIX</Text>
      <Text
          textColor="white"
      >"Welcome to CarFix: Your Ultimate Guide to DIY Car Repairs!
                Explore our comprehensive step-by-step guides to revive your ride
                with confidence. From troubleshooting common issues to tackling complex
                repairs, we've got you covered. Plus, unleash your expertise by creating
                and sharing your own customized guides, helping fellow car enthusiasts overcome
                any automotive challenge. Get ready to take control of your car's maintenance and
                unleash your inner mechanic with CarFix!"</Text>
    </Flex>
  </Center>
  );
};

export default HomeScreen;
