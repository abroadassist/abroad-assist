import React from "react";
import { Form, Formik } from "formik";
import FormInputWrapper from "components/wrappers/FormInputWrapper";
import * as Yup from "yup";
import { FaPaperPlane } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import "react-phone-input-2/lib/style.css";
import { notify } from "api/notify";

const schema = Yup.object({
  fullname: Yup.string().required("Your name is required").nullable(),
  email: Yup.string()
    .required("Your email is required")
    .email("Enter a valid email")
    .nullable(),
  phone: Yup.string().required("Your phone number is required").nullable(),
  details: Yup.string().optional().nullable(),
});

const mailString = ({
  name,
  email,
  phone,
  details,
  campaign,
  submissionDate,
}) => `<p>A lead is interested in the services mentioned below. Please reach out to them at the earliest.</p>
<p><strong>Name</strong>: ${name}</p>
<p><strong>Details</strong>: ${details}</p>
<p><strong>Contact</strong>:</p>
<p><a href="mailto:${email}" target="_blank" rel="noopener">${email}</a> | <a href="tel:${phone}" target="_blank" rel="noopener">${phone}</a></p>
<p><strong>Submission Date</strong>: ${submissionDate}</p>
<p>&nbsp;</p>
<p>Cheers!</p>
<hr />
<p><small>Lead generated through the campaign: <em>${campaign}</em></small></p>`;

const ContactForm = () => {
  return (
    <>
      <Formik
        {...{
          initialValues: {
            fullname: null,
            phone: null,
            email: null,
            details: null,
          },
          validationSchema: schema,
          onSubmit: async (values, actions) => {
            console.log(values);
            const response = await notify({
              to: "writing@abroadassist.net",
              from: values?.email,
              subject: `This is a test (please ignore) - ${values?.fullname}`,
              content: mailString({
                campaign: "TESTING",
                name: values?.fullname,
                email: values?.email,
                phone: values?.phone,
                details: values?.details,
                submissionDate: new Date().toLocaleString(),
              }),
            });
            if (!!response?.status) {
              actions.setSubmitting(false);
            }
          },
        }}
      >
        {(formik) => {
          const disableSubmit =
            formik.isSubmitting ||
            (formik.dirty && !formik.isValid) ||
            !formik.touched;

          return (
            <Form>
              <FormInputWrapper
                {...{
                  label: "Name",
                  message: "What should we call you?",
                  error: formik.errors.fullname,
                }}
              >
                <input
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullname}
                  name="fullname"
                  className="mt-2 peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base"
                />
              </FormInputWrapper>
              <FormInputWrapper
                {...{
                  label: "Email",
                  error: formik.errors.email,
                }}
              >
                <input
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  name="email"
                  className="mt-2 peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  sm:text-base"
                />
              </FormInputWrapper>
              <FormInputWrapper
                {...{
                  label: "Phone",
                  message: "Share it so we can reach you faster",
                  error: formik.errors.phone,
                }}
              >
                <input
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  name="phone"
                  className="mt-2 peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base"
                />
              </FormInputWrapper>
              <FormInputWrapper
                {...{
                  label: "Details",
                  error: formik.errors.details,
                  message:
                    "You can include the course you're applying for, the Universities and anything more you would like to let us know before we reach out to you.",
                }}
              >
                <textarea
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.details}
                  name="details"
                  className="mt-3 peer h-24 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  sm:text-base"
                />
              </FormInputWrapper>
              <div className="flex">
                <button
                  type="submit"
                  className={`p-3 px-5 mt-6 w-44 rounded mx-auto font-bold text-white text-lg ${
                    disableSubmit
                      ? "bg-slate-400"
                      : "bg-blue-900 hover:bg-aa-inner hover:animate-pulse shadow-md"
                  }`}
                  disabled={disableSubmit}
                >
                  <div className="flex flex-row items-center">
                    {formik.isSubmitting ? (
                      <>
                        <CgSpinner className="animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" /> Get in Touch
                      </>
                    )}
                  </div>
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
