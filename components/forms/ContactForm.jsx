import React, { useState } from "react";
import { Form, Formik } from "formik";
import FormInputWrapper from "components/wrappers/FormInputWrapper";
import * as Yup from "yup";
import { FaPaperPlane } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import "react-phone-input-2/lib/style.css";
import { notify } from "api/notify";
import PhoneIntl from "./inputs/PhoneIntl";
import Input from "./inputs/Input";
import Textarea from "./inputs/Textarea";

const schema = Yup.object({
  fullname: Yup.string().required("Your name is required").nullable(),
  email: Yup.string().required("Your email is required").email("Enter a valid email").nullable(),
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
}) => `<p>A person has reached out through the Contact form. Find their details below!</p>
<p><strong>Name</strong>: ${name}</p>
<p><strong>Details</strong>: ${details}</p>
<p><strong>Contact</strong>:</p>
<p><a href="mailto:${email}" target="_blank" rel="noreferrer">${email}</a> | <a href="tel:${phone}" target="_blank" rel="noreferrer">+${phone}</a></p>
<p><strong>Submission Date</strong>: ${submissionDate}</p>
<p>&nbsp;</p>
<p>Cheers!</p>
<hr />
<p><small>Lead generated through the campaign: <em>${campaign}</em></small></p>`;

const ContactForm = () => {
  const [phoneNum, setPhoneNum] = useState();

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
            const response = await notify({
              to: "contact@abroadassist.net",
              from: "new-lead@abroadassist.net",
              subject: `This is a test (please ignore) - ${values?.fullname}`,
              content: mailString({
                campaign: "TESTING",
                name: values?.fullname ?? "",
                email: values?.email ?? "",
                phone: phoneNum,
                details: values?.details ?? "",
                submissionDate: new Date().toLocaleString(),
              }),
            });
            if (!!response?.status) {
              actions.setSubmitting(false);
              actions.resetForm();
              setPhoneNum();
            }
          },
        }}
      >
        {(formik) => {
          const disableSubmit = phoneNum?.length < 7 || formik.isSubmitting || !formik.dirty || !formik.isValid;

          return (
            <Form>
              <FormInputWrapper
                {...{
                  label: "Name",
                  message: "What should we call you?",
                  error: formik.errors.fullname,
                }}
              >
                <Input
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullname}
                  name="fullname"
                />
              </FormInputWrapper>
              <FormInputWrapper
                {...{
                  label: "Email",
                  error: formik.errors.email,
                }}
              >
                <Input
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  name="email"
                />
              </FormInputWrapper>
              <FormInputWrapper label="Phone Number" message="Share it so we can reach out faster">
                <PhoneIntl value={phoneNum} onChange={(e) => setPhoneNum(e)} />
              </FormInputWrapper>

              <FormInputWrapper
                {...{
                  label: "Message/Query",
                  error: formik.errors.details,
                  // message:
                  //   "You can include the course you're applying for, the Universities and anything more you would like to let us know before we reach out to you.",
                }}
              >
                <Textarea
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.details}
                  name="details"
                />
              </FormInputWrapper>
              <div className="flex">
                <button
                  type="submit"
                  className={`p-3 px-5 mt-6 w-44 rounded mx-auto font-bold text-white text-lg ${
                    disableSubmit ? "bg-slate-400" : "bg-blue-900 hover:bg-aa-inner hover:animate-pulse shadow-md"
                  }`}
                  disabled={disableSubmit}
                >
                  <div className="flex flex-row items-center justify-center">
                    {formik.isSubmitting ? (
                      <>
                        <CgSpinner className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" /> Send
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
