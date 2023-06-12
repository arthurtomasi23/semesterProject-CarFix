import React from "react";
import { Text, Flex } from "@chakra-ui/react";

export default function test() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg="gray.900"
      color="white"
      p="8"
    >
      <Text fontSize="xl">Login</Text>
    </Flex>
  );
}
