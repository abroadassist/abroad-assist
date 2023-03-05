import React, { useMemo } from "react";
import ImmigrationDetails from "components/forms/ImmigrationDetails";
import LandingPage from "components/landing-page";
import LayoutWrapper from "components/layout/LayoutWrapper";
import { useRouter } from "next/router";
import { FaStar, FaHeadset } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

const paragraphs = [
  {
    id: 1,
    text: "Abroad Assist is a writing agency catering to the needs of Visa Applicants to Canada, UK, & Australia.",
  },
  {
    id: 2,
    text: "We specialize in dealing with rejection cases & can craft effective Letters of Explanation (LoE) for improved approval chances in the next Visa application.",
  },
];

const featureCards = [
  {
    id: 1,
    title: "Plagiarism-Free Materials",
    details:
      "We provide 100% unique & plagiarism-free Visa SOP to improve your approval chances.",
    icon: <FiFileText className="mr-2" size={42} />,
  },
  {
    id: 2,
    title: "Top-Notch Writing",
    details:
      "With a combined experience of 20+ years, our team produces writing of top-tier quality-giving you nothing but the best value for your money.",
    icon: <FaStar className="mr-2" size={42} />,
  },
  {
    id: 3,
    title: "Dedicated Customer Service",
    details:
      "We hear your needs and stay in touch throughout the entire process.",
    icon: <FaHeadset className="mr-2" size={42} />,
  },
];

const services = [
  {
    id: 1,
    description: "Visa SOP for Australia, Canada, & UK",
  },
  {
    id: 2,
    description: "Letter of Explanation for Rejection Cases",
  },
  {
    id: 3,
    description: "Letter of Support for Immigration",
  },
  {
    id: 4,
    description: "Spousal Sponsorship Support Letters",
  },
  {
    id: 5,
    description: "Letter of Invitation for Canadian Visa",
  },
  {
    id: 6,
    description: "Letter of Reference for Canadian Visa",
  },
];

const workflow = [
  {
    step: 1,
    icon: "",
    title: "Get in Touch With Us",
    description:
      "Fill out our contact form or call us at +91-9949883658 to get in touch. We can discuss your requirements in detail.",
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
      "After sharing all the inputs and filling out the form, we’ll draft your VISA SOP and share it with you for review.",
  },
  {
    step: 4,
    icon: "",
    title: "Feedback",
    description:
      "Get on a call with us to discuss feedback and modifications to your material.",
  },
  {
    step: 5,
    icon: "",
    title: "Get the Final Draft of your Write Up",
    description:
      "Receive your finalized version of 100% unique and plagiarism-free material.",
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
    title: "VISA SOPs delivered",
    number: 1000,
  },
  {
    order: 3,
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
    description:
      "Demonstrated track record in writing effective LOEs & Visa SOPs for rejection cases.",
  },
  {
    id: 3,
    description: "100% original and unique writing tailored to your profile.",
  },
  {
    id: 4,
    description:
      "Writing standards in accordance with your test scores for maximum success.",
  },
  {
    id: 5,
    description: "Dedicated customer service and support.",
  },
];

const campaigns = ({ campaignId }) => {
  let whatsappMessage, campaignString;
  switch (campaignId) {
    case "1":
      whatsappMessage =
        "Hi, I would like to learn more about your visa sop writing services.";
      campaignString = "Buying Intention";
      break;
    case "2":
      whatsappMessage =
        "Hi, I would like to learn more about your immigration writing services.";
      campaignString = "Non-Buying Intention";
      break;
    case "3":
      whatsappMessage =
        "Hi, I would like to find out more about your visa sop writing services.";
      campaignString = "International";
      break;

    default:
      whatsappMessage =
        "Hi, I would like to know more about your writing services.";
      campaignString = "Organic";
      break;
  }
  return {
    whatsappMessage: encodeURIComponent(whatsappMessage),
    campaignString,
  };
};

const MoveAbroad = () => {
  const { query } = useRouter();
  const campaign = useMemo(() => campaigns({ campaignId: query?.c }), [query]);

  return (
    <LayoutWrapper
      {...{
        siteTitle: "Move Abroad with the Abroad Assist Edge! | Abroad Assist",
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
          contactForm: (
            <ImmigrationDetails campaignString={campaign?.campaignString} />
          ),
        }}
      />
    </LayoutWrapper>
  );
};

export default MoveAbroad;
