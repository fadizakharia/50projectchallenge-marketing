import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Footer from "../components/footer";
export default function Contact() {
  return (
    <div style={{ backgroundColor: "rgb(53, 45, 57)", height: "100%" }}>
      <h3 className="text-light w-100 pt-5 text-center">contact us</h3>
      <Formik
        initialValues={{ email: "", message: "" }}
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
            alert("Message sent Successfully");
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          // <div className="container">
          <Form className="form-group my-5">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <label htmlFor="fullname" className="text-light">
                Full Name
              </label>
              <Field
                className="form-control my-2 w-50"
                type="email"
                name="fullname"
              />

              <label htmlFor="email" className="text-light">
                Phone Number
              </label>
              <Field
                className="form-control my-2 w-50"
                type="phonenumber"
                name="phonenumber"
              />
              <label htmlFor="email" className="text-light">
                Email
              </label>

              <Field
                className="form-control my-2 w-50"
                type="email"
                name="email"
              />

              <ErrorMessage
                className="text-danger"
                name="email"
                component="div"
              />

              <label htmlFor="message" className="text-light">
                Message
              </label>
              <Field
                className="form-control my-3 w-75"
                type="message"
                name="message"
                component="textarea"
                style={{ resize: "none", height: "200px" }}
              />
              <ErrorMessage name="message" component="div" />
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-outline-light"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
          // </div>
        )}
      </Formik>
      <Footer />
    </div>
  );
}
