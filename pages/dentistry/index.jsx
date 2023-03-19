import React, { useMemo } from "react";
import { useRouter } from "next/router";
import DentistryDetails from "components/forms/DentistryDetails";
import LandingPage from "components/landing-page";
import LayoutWrapper from "components/layout/LayoutWrapper";
import { FiUserCheck } from "react-icons/fi";
import { TfiWrite } from "react-icons/tfi";
import { GiTakeMyMoney } from "react-icons/gi";

const paragraphs = [
  {
    id: 1,
    text: "We're a dentist-writer duo working exclusively with aspiring dentists applying to DDS, AEGD, & Advanced Standing Programs in the US.",
  },
];

const featureCards = [
  {
    id: 1,
    title: "Expert Assistance",
    details: "Get expert help right from a dentist based out of the US, working in the healthcare sector. ",
    icon: <FiUserCheck className="mr-2" size={42} />,
  },
  {
    id: 2,
    title: "Top-Notch Writing",
    details:
      "With a combined experience of 20+ years, we produce top-tier quality-giving you nothing but the best value for money",
    icon: <TfiWrite className="mr-2" size={42} />,
  },
  {
    id: 3,
    title: "Affordable Pricing",
    details:
      "Unlike mega consultancies, we're a dentist-writer duo looking to assist dentists in their application process for a fair charge.",
    icon: <GiTakeMyMoney className="mr-2" size={42} />,
  },
];

const services = [
  {
    id: 1,
    description: "Statement of Purpose/Personal Statement",
  },
  {
    id: 2,
    description: "Letter of Recommendation",
  },
  {
    id: 3,
    description: "CV/Resume",
  },
  {
    id: 4,
    description: "Application Essays (UMN, LLU, UPENN, and more)",
  },
  {
    id: 5,
    description: "Interview Training for Graduate Admissions",
  },
];

const workflow = [
  {
    step: 1,
    icon: "",
    title: "Get in Touch",
    description: "Fill out our contact form or WhatsApp us at +1 (614) 626-5201.",
  },
  {
    step: 2,
    icon: "",
    title: "Share your Requirements",
    description:
      "Let us know what you'd like us to help you with. We provide end-to-end help for applying to advanced standing programs for internationally trained dentists.",
  },
  {
    step: 3,
    icon: "",
    title: "Provide inputs for your writing documents",
    description:
      "We will get in touch with you and share specific questions relevant to the service you have opted for.",
  },
  {
    step: 4,
    icon: "",
    title: "Get your materials",
    description:
      "Receive your written materials within a week of opting for our service and providing the necessary inputs.",
  },
  {
    step: 5,
    icon: "",
    title: "Feedback & changes",
    description:
      "Reach out for any concerns or questions you may have regarding the work for a round of feedback and changes.",
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
  let whatsappMessage, campaignString;
  switch (campaignId) {
    default:
      whatsappMessage = "Hey there! I need writing help for my Master's application.";
      campaignString = "Organic";
      break;
  }
  return {
    whatsappMessage: encodeURIComponent(whatsappMessage),
    campaignString,
  };
};

const Dentistry = () => {
  const { query } = useRouter();
  const campaign = useMemo(() => campaigns({ campaignId: query?.c }), [query]);

  return (
    <LayoutWrapper
      {...{
        siteTitle: "Expert Assistance for Dental Applicants | Abroad Assist",
        siteDescription: "Writing & Interview Training Services for Dental Students",
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
          contactNo: "16146265201",
          contactForm: <DentistryDetails campaignString={campaign?.campaignString} />,
        }}
      />
    </LayoutWrapper>
  );
};

export default Dentistry;
