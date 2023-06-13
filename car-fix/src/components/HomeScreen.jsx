import React from 'react';
import { Box, Flex, Text, Center } from '@chakra-ui/react';

const HomeScreen = () => {
  return (
  <Center>
    <Flex 
    flexDir="column"
    alignItems="center"
    justifyContent="center"
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
          fontSize="xl"
          textAlign="center"
          margin="3vw"
      >
      "Welcome to CarFix: Your Ultimate Guide to DIY Car Repairs!
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
