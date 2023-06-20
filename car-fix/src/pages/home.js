import React, { useRef, useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  Box,
  Avatar,
  Text,
  IconButton,
  AvatarBadge,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function home() {
  const supabase = useSupabaseClient();
  const [username, setUsername] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    let metadata = user.user_metadata;
    console.log(metadata);
    setUsername(metadata.username);
  }
  getUser();
  return (
    <Flex justifyContent="center" alignItems="center" flexDir="column">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100vw"
        h="100vh"
        bgSize="cover"
        bgImage="url('https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')"
      >
        <Box
          backgroundColor="rgba(0,0,0,0.3)"
          pos="absolute"
          w="100vw"
          h="100vh"
        />
        <Box>
          <Text
            textAlign="center"
            justifyContent="center"
            textColor="white"
            fontSize="100px"
            mb="10"
            as="b"
            pos="relative"
          >
            Hello{username ? `, ${username}` : ""}!
          </Text>
          <br />
          <Text
            textAlign="center"
            justifyContent="center"
            textColor="white"
            fontSize="100px"
            mb="10"
            as="b"
            pos="relative"
          >
            Welcome to CarFix
          </Text>
        </Box>
      </Box>
      <Flex flexDir="row" h="100vh" alignItems="center" w="100vw">
        <Flex ml="20" mr="20">
          <Box h="50vh">
            <Text fontSize="50px" color="black" as="b" w="40vw">
              EVERY CAR ENTHUSIASTS DREAM!
            </Text>
          </Box>
          <Box h="50vh">
            <Text color="black" fontSize="xl" w="60vw">
              Welcome to our platform, the go-to destination for car repair
              guides suitable for everyone, from beginners to pros. Whether
              you're just starting out or have years of experience under your
              belt, we provide step-by-step guides to help you tackle car
              repairs with ease. Our mission is to empower car enthusiasts and
              owners with the knowledge they need to perform various repairs and
              maintenance tasks. From basic fixes like changing a tire or
              replacing a headlight to more advanced repairs such as engine
              diagnostics or brake system upgrades, our comprehensive collection
              of guides covers it all. But we don't stop there. We believe in
              the power of community collaboration. That's why we encourage
              users like you to contribute your own repair guides to our
              platform. Share your experiences, solutions, and unique insights
              to help fellow car owners facing similar issues. Together, we
              create a supportive environment for learning and sharing
              expertise. Join us today and discover a world of automotive repair
              possibilities. Whether you're seeking to learn or contribute, our
              platform is here to guide you every step of the way. Start
              exploring, repairing, and elevating your car maintenance skills
              today.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
