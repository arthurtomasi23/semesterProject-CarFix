import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  Input,
  FormLabel,
  Box,
  Text,
  Link,
  Flex,
} from "@chakra-ui/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function login() {
  const supabase = useSupabaseClient();
  const router = useRouter();

  const handleLogin = async (values) => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/home");
    }
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
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              <Text fontSize="3xl">Sign In</Text>
              <Box mt={4} mb={4}></Box>
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
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
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
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
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
                loadingText="Submitting"
                isLoading={isSubmitting}
              >
                Sign In
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
                isLoading={isSubmitting}
                loadingText="Submitting"
                _hover={{ bg: "black", color: "white" }}
              >
                <Link href="/">Register</Link>
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
