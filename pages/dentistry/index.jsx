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
    text: "We're a dentist-writer duo working exclusively with aspiring dentists applying to DDS, AEGD, CAAPID & Advanced Standing Programs in the US.",
  },
];

const featureCards = [
  {
    id: 1,
    title: "Expert Assistance",
    details:
      "Get expert help right from an internationally trained dentist working as a healthcare administration professional in the US.",
    icon: <FiUserCheck className="mr-2" size={42} />,
  },
  {
    id: 2,
    title: "Top Notch Writing",
    details:
      "With a combined experience of 20+ years, we produce writing materials that are well-crafted and may significantly improve your chances of admission.",
    icon: <TfiWrite className="mr-2" size={42} />,
  },
  {
    id: 3,
    title: "Reasonably Priced",
    details:
      "We are a dentist-writer duo striving to offer the best quality of work at modest prices. Below-the-market pricing & above-the-market quality is our guarantee.",
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
    description: "Expert team comprising a dentist and writer with a combined experience of more than 25 years. ",
  },
  {
    id: 2,
    description: "Catering exclusively to internationally trained dentists applying for advanced standing programs.",
  },
  {
    id: 3,
    description: "100% unique writing tailored to your language test scores for improved authenticity & success rate.",
  },
  {
    id: 4,
    description: "Dedicated customer support and on-time delivery of materials.",
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
