import React, { useMemo } from "react";
import { useRouter } from "next/router";
import EducationDetails from "components/forms/EducationDetails";
import LandingPage from "components/landing-page";
import LayoutWrapper from "components/layout/LayoutWrapper";
import { FaStar, FaUniversity } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { CONSTANTS } from "constants/constants";

const paragraphs = [
  {
    id: 1,
    text: "Abroad Assist is your one-stop-destination for expert SOP, LOR, & Essay Writing Services",
  },
];

const featureCards = [
  {
    id: 1,
    title: "Plagiarism-Free Materials",
    details:
      "We provide 100% unique & plagiarism-free SOPs, LORs, & Admission Essays to boost your admission prospects.",
    icon: <FiFileText className="mr-2" size={42} />,
  },
  {
    id: 2,
    title: "Top-Notch Writing",
    details:
      "With a combined experience of 20+ years, our team produces writing of top-tier quality–giving you nothing but the best value for your money.",
    icon: <FaStar className="mr-2" size={42} />,
  },
  {
    id: 3,
    title: "Customised to University Requirements",
    details: "Each SOP & Admission Essay is customized to the university you apply for.",
    icon: <FaUniversity className="mr-2" size={42} />,
  },
];

const services = [
  {
    id: 1,
    description: "Statement of Purpose/Personal Statement",
  },
  {
    id: 2,
    description: "Admission Essays",
  },
  {
    id: 3,
    description: "Letter of Recommendation",
  },
  {
    id: 4,
    description: "CV & Resume",
  },
  {
    id: 5,
    description: "Application Essays",
  },
];

const workflows = ({ contactNoDisplay }) => [
  {
    step: 1,
    icon: "",
    title: "Get in Touch With Us",
    description: `Fill out our contact form or call us at ${contactNoDisplay} to get in touch. We can discuss your requirements in detail.`,
  },
  {
    step: 2,
    icon: "",
    title: "Fill out our Questionnaire",
    description:
      "Once you decide to opt for our service, we have you fill out a questionnaire form to gather key information about your profile, including your education, research work, extracurricular activities, and more.",
  },
  {
    step: 3,
    icon: "",
    title: "Get the First Draft",
    description:
      "After sharing all the inputs and filling out the form, we'll draft your writing materials and share them with you for review.",
  },
  {
    step: 4,
    icon: "",
    title: "Feedback",
    description:
      "Get on a call with us to discuss feedback and modifications to your written materials. If you've opted for university customization, we start that process at this stage.",
  },
  {
    step: 5,
    icon: "",
    title: "Get the Final Draft of your Write Up",
    description: "Receive your finalized versions of 100% unique and plagiarism-free written materials. ",
  },
];

const stats = [
  {
    order: 1,
    title: "Countries Served Globally",
    number: 10,
  },
  {
    order: 2,
    title: "Satisfied Clients",
    number: 1000,
  },
  {
    order: 3,
    title: "Masters Courses Written For",
    number: 100,
  },
  {
    order: 4,
    title: "Words Written so Far",
    number: 1000000,
  },
];

const featureList = [
  {
    id: 1,
    description: "Expert team with 20+ years of combined experience.",
  },
  {
    id: 2,
    description: "Catered to courses from technology and IT to dentistry and medicine.",
  },
  {
    id: 3,
    description: "100% original and unique writing tailored to your profile.",
  },
  {
    id: 4,
    description: "Writing standards in accordance with your test scores for maximum success.",
  },
  {
    id: 5,
    description: "Dedicated customer service and support.",
  },
];

const campaigns = ({ campaignId }) => {
  let whatsappMessage, campaignString, contactNo, contactNoDisplay, sendToEmail;
  switch (campaignId) {
    case "1":
      whatsappMessage = "Hi, I would like to avail your writing services.";
      campaignString = "Buying Intention";
      break;
    case "2":
      whatsappMessage = "Hi, I would like to learn more about your writing services.";
      campaignString = "Non-Buying Intention";
      break;
    case "3":
      whatsappMessage = "Hey! I would like to avail your writing services.";
      campaignString = "UAE Region";
      break;
    case "4":
      whatsappMessage = "Hey! I would like to learn about your writing services.";
      campaignString = "US Region";
      contactNo = "16146265201";
      contactNoDisplay = "+1-(614)-6265201";
      sendToEmail = CONSTANTS.CONTACT;
      break;

    default:
      whatsappMessage = "Hi, I would like to opt for your writing services.";
      campaignString = "Organic";
      break;
  }
  return {
    whatsappMessage: encodeURIComponent(whatsappMessage),
    campaignString,
    contactNo: contactNo ?? "919949883658",
    contactNoDisplay: contactNoDisplay ?? "+91-9949883658",
    sendToEmail: sendToEmail ?? CONSTANTS.WRITING,
  };
};

const StudyAbroad = () => {
  const { query } = useRouter();
  const campaign = useMemo(() => campaigns({ campaignId: query?.c }), [query]);
  const workflow = useMemo(
    () => workflows({ contactNoDisplay: campaign?.contactNoDisplay }),
    [query, campaign?.contactNoDisplay],
  );

  return (
    <LayoutWrapper
      {...{
        siteTitle: "Study Abroad with the Abroad Assist Edge! | Abroad Assist",
      }}
    >
      <LandingPage
        {...{
          featureCards,
          bannerParagraphs: paragraphs,
          services,
          workflow,
          stats,
          featureList,
          campaign,
          contactNo: campaign?.contactNo,
          contactForm: (
            <EducationDetails campaignString={campaign?.campaignString} sendToEmail={campaign?.sendToEmail} />
          ),
        }}
      />
    </LayoutWrapper>
  );
};

export default StudyAbroad;
