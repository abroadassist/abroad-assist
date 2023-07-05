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
import Checkbox from "./inputs/Checkbox";

const schema = Yup.object({
  fullname: Yup.string().required("Your name is required"),
  email: Yup.string().required("Your email is required").email("Enter a valid email"),
  //   phone: Yup.string().required("Your phone number is required"),
  details: Yup.string().optional(),
});

const mailString = ({
  name,
  email,
  phone,
  details,
  campaign,
  submissionDate,
}) => `<p>A lead is interested in your services. Please reach out to them at the earliest.</p>
<p><strong>Name</strong>: ${name}</p>
<p><strong>Details</strong>: ${details}</p>
<p><strong>Contact</strong>:</p>
<p><a href="mailto:${email}" target="_blank" rel="noreferrer">${email}</a> | <a href="tel:${phone}" target="_blank" rel="noreferrer">+${phone}</a></p>
<p><strong>Submission Date</strong>: ${submissionDate}</p>
<p>&nbsp;</p>
<p>Cheers!</p>
<hr />
<p><small>Lead generated through the campaign: <em>${campaign}</em></small></p>`;

const servicesOptions = [
  {
    id: 1,
    label: "SOP",
    value: "SOP",
  },
  {
    id: 2,
    label: "Admission Essay",
    value: "Admission Essay",
  },
  {
    id: 3,
    label: "LOR",
    value: "LOR",
  },
  {
    id: 4,
    label: "CV/Resume",
    value: "CV/Resume",
  },
  {
    id: 5,
    label: "Application Essay",
    value: "Application Essay",
  },
  {
    id: 6,
    label: "Others (specify below)",
    value: "Other services",
  },
];

const ImmigrationDetails = ({ campaignString = "Organic" }) => {
  const [phoneNum, setPhoneNum] = useState();

  return (
    <>
      <Formik
        {...{
          initialValues: {
            fullname: "",
            email: "",
            details: "",
          },
          validationSchema: schema,
          onSubmit: async (values, actions) => {
            const response = await notify({
              to: "writing@abroadassist.net",
              from: "new-lead@abroadassist.net",
              subject: `${values?.fullname} needs writing services (VISA/Immigration: ${campaignString})`,
              content: mailString({
                campaign: `VISA/Immigration - ${campaignString}`,
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
              <FormInputWrapper
                label="Phone Number"
                message="Share it so we can reach out faster"
                error={((formik.dirty && !phoneNum) || phoneNum?.length < 7) && "Your phone number is required"}
              >
                <PhoneIntl
                  value={phoneNum}
                  onChange={(e) => {
                    setPhoneNum(e);
                  }}
                />
              </FormInputWrapper>
              {/* <FormInputWrapper
                label="What do you need help with?"
                message=""
                error={formik.errors.services}
              >
                <Checkbox
                  {...{
                    name: "services",
                    options: servicesOptions,
                    onChange: formik.handleChange,
                    onBlur: formik.handleBlur,
                    values: formik.values.services,
                    inline: true,
                  }}
                />
              </FormInputWrapper> */}
              <FormInputWrapper
                {...{
                  label: "Details",
                  error: formik.errors.details,
                  message:
                    "You can include the country you're moving to, documents required and any more information you would like us to know.",
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

export default ImmigrationDetails;
