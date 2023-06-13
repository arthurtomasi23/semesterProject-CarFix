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
  Flex,
} from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";

const fileInputRef = React.createRef();
const handleButtonClick = () => {
  fileInputRef.current.click();
};

const Login = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    m={5}
    p={8}
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Text fontSize="3xl">Sign In</Text>
          <Box mt={4} mb={4}></Box>
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
            <Link href="/home">Sign In</Link>
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
            <Link textDecoration="none" m="5" href="/register">
              Register
            </Link>
          </Button>
        </Form>
      )}
    </Formik>
  </Box>
);

export default Login;
