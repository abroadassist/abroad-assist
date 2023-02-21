import React from "react";
import { Form, Formik } from "formik";
import FormInputWrapper from "components/wrappers/FormInputWrapper";

const ContactForm = () => {
  return (
    <>
      <Formik
        {...{
          initialValues: {
            fullname: "",
            phone: "",
            email: "",
            details: "",
          },
          onSubmit: (values, actions) => {
            console.log(values);
          },
        }}
      >
        {(formik) => {
          return (
            <Form>
              <FormInputWrapper>
                <input
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullname}
                  name="fullname"
                />
              </FormInputWrapper>
              <FormInputWrapper>
                <input
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  name="email"
                />
              </FormInputWrapper>
              <button
                type="submit"
                className="p-3 px-5 text-white bg-blue-900 hover:bg-aa-inner"
                disabled={formik.isSubmitting}
              >
                SUBMIT
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
