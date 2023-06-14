import React, { useRef, useState } from "react";
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
import { FiUpload } from "react-icons/fi";

const Register = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Flex
      justifyContent="center"
      height="80vh"
      mt="10vh"
      backgroundImage="url('https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m={5}
        p={8}
        bg="black"
        opacity="85%"
        width="30%"
        borderRadius="md"
        color="white"
      >
        <Text color="white" fontSize="3xl">
          Register
        </Text>
        <Box mb={4}>
          <FormLabel mb={2} fontSize="lg" fontWeight="medium">
            Your Profile Picture
          </FormLabel>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept={[".jpg", ".png", ".jpeg"]}
            onChange={handleImageChange}
          />
          <Avatar size="2xl" src={selectedImage}>
            <AvatarBadge boxSize="1.25em" onClick={handleButtonClick}>
              <IconButton
                icon={<FiUpload />}
                variant="solid"
                borderRadius="full"
                size="lg"
                outline="none"
                _hover={{ bg: "grey" }}
              />
            </AvatarBadge>
          </Avatar>
        </Box>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box mb={4}>
                <FormLabel
                  htmlFor="email"
                  mb={2}
                  fontSize="lg"
                  fontWeight="medium"
                >
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
                <FormLabel
                  htmlFor="password"
                  mb={2}
                  fontSize="lg"
                  fontWeight="medium"
                >
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
                colorScheme="orange"
                py={2}
                px={4}
                rounded="md"
                w="full"
                variant="solid"
                //isLoading
                loadingText="Submitting"
              >
                <ChakraLink href="/home">Register</ChakraLink>
              </Button>
              <Text m="1" textAlign="center">
                or
              </Text>
              <Button
                colorScheme="orange"
                py={2}
                px={4}
                rounded="md"
                w="full"
                variant="outline"
                _hover={{ bg: "black", color: "white" }}
              >
                <ChakraLink m="5" href="/login">
                  Sign In
                </ChakraLink>
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default Register;
