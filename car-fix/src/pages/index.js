import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Box,
  Avatar,
  Title,
  Text,
  IconButton,
  AvatarBadge,
  Link,
} from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";

const Register = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    m={5}
    p={8}
  >
    <Text fontSize="3xl">Register</Text>
    <Box mb={4}>
      <FormLabel htmlFor="email" mb={2} fontSize="lg" fontWeight="medium">
        Email
      </FormLabel>
      <Field
        type="email"
        name="email"
        id="email"
        as={Input}
        placeholder="Enter Email"
      />
    </Box>
    <Box mb={4}>
      <FormLabel htmlFor="password" mb={2} fontSize="lg" fontWeight="medium">
        Password
      </FormLabel>
      <Field
        name="password"
        id="password"
        as={Input}
        type="password"
        placeholder="Enter password"
      />
    </Box>
    <Button
      type="submit"
      colorScheme="black"
      py={2}
      px={4}
      rounded="md"
      w="full"
      variant="solid"
      backgroundColor="black"
      //isLoading
      loadingText="Submitting"
    >
      <Link href="/home">Register</Link>
    </Button>
    <Text m="1" textAlign="center">
      or
    </Text>
    <Button
      colorScheme="black"
      py={2}
      px={4}
      rounded="md"
      w="full"
      variant="outline"
      _hover={{ bg: "black", color: "white" }}
    >
      <Link textDecoration="none" m="5" href="/login">
        Sign In
      </Link>
    </Button>
  </Box>
);

export default Register;
