import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";

const Basic = () => (
  <div className="flex flex-col justify-center items-center m-5 px-4 py-8">
    <h1 className="text-3xl font-bold m-4">Register</h1>
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
        <Form className="max-w-sm">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-lg font-medium">
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="w-full border text-black border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-medium"
            >
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="w-full border text-black border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-black py-2 px-4 rounded-md justify-center w-full bg-white"
          >
            <Link href="/home">Submit</Link>
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
