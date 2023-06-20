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
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

const Register = () => {
  const supabase = useSupabaseClient();
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef();
  const router = useRouter();

  const handleFormSubmit = async (values) => {
    const { user, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          username: values.username,
          profilePicture: selectedImage,
        },
      },
    });
    if (error) {
      alert(error.message);
    } else {
      router.push("/login");
    }
  };

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
      alignItems="center"
      height="100vh"
      backgroundPosition="center"
      backgroundSize="cover"
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
            name="profilePicture"
            id="profilePicture"
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
                _hover={{ bg: "orange" }}
              />
            </AvatarBadge>
          </Avatar>
        </Box>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.username) {
              errors.username = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 8) {
              errors.password = "Password must be at least 8 characters long";
            }
            if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "Passwords do not match";
            }
            return errors;
          }}
          onClick={handleButtonClick}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box mb={4}>
                <FormLabel
                  htmlFor="username"
                  mb={2}
                  fontSize="lg"
                  fontWeight="medium"
                >
                  Username
                </FormLabel>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  as={Input}
                  placeholder="Enter Username"
                />
                <ErrorMessage name="username" component={Text} color="red" />
              </Box>
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
                <ErrorMessage name="email" component={Text} color="red" />
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
                <ErrorMessage name="password" component={Text} color="red" />
              </Box>
              <Box mb={4}>
                <FormLabel
                  htmlFor="confirmPassword"
                  mb={2}
                  fontSize="lg"
                  fontWeight="medium"
                >
                  Confirm Password
                </FormLabel>
                <Field
                  name="confirmPassword"
                  id="confirmPassword"
                  as={Input}
                  type="password"
                  placeholder="Confirm password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component={Text}
                  color="red"
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
                isLoading={isSubmitting}
                loadingText="Submitting"
              >
                Register
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
