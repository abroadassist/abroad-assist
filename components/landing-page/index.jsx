import React, { useMemo, useRef } from "react";
import Container from "components/wrappers/Container";

// assets
import ContactForm from "components/forms/ContactForm";
import { useRouter } from "next/router";
import {
  FaArrowRight,
  FaFileAlt,
  FaPaperPlane,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const LandingPage = ({
  heading = "Welcome Aboard!",
  bannerParagraphs,
  featureCards,
  services,
  contactForm = <ContactForm />,
  workflow,
  stats,
  featureList,
  testimonials,
  messages,
}) => {
  const formRef = useRef();
  const { query } = useRouter();

  const message = useMemo(() => {
    const currentMessage = messages(query)?.find((m) => m.condition);
    const defaultMessage = messages(query)?.find((m) => m.default);
    return {
      whatsappMessage: encodeURIComponent(
        currentMessage?.whatsappMessage ?? defaultMessage?.whatsappMessage
      ),
    };
  }, [query]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Banner - start */}
      <div
        className="relative py-24 pb-44 text-center text-white z-20"
        style={{
          backgroundImage: `url("assets/images/philip-myrtorp-iiqpxCg2GD4-unsplash.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* 
            Banner Image
            https://unsplash.com/photos/iiqpxCg2GD4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
        */}
        <div className="bg-aa-blue-1 w-full h-full absolute opacity-70 top-0 left-0 z-[-5]"></div>

        <Container classes="px-8">
          {/* Welcome Aboard title */}
          <h1 className="text-5xl sm:text-7xl font-bold text-white ">
            {heading}
          </h1>
          <div className="py-5 text-xl  sm:text-2xl">
            {bannerParagraphs?.map((paragraph) => {
              return (
                <p key={`paragraph-${paragraph.id}`} className="pb-5">
                  {paragraph.text}
                </p>
              );
            })}
          </div>

          <button
            className="flex flex-row items-center mx-auto p-3 px-6 bg-[#debe26] text-2xl font-bold hover:animate-bounce rounded-lg shadow hover:shadow-lg"
            onClick={scrollToForm}
          >
            <FaPaperPlane className="mr-2" /> Get in Touch
          </button>
          {/* get in touch button */}
        </Container>
      </div>
      {/* Banner - end */}

      {/* Features list icon cards */}
      <Container classes="-mt-16 relative pb-12 px-6 z-30">
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
          {featureCards.map((feature) => {
            return (
              <div
                key={`feature-${feature.id}`}
                className="p-4 flex-1 rounded-lg bg-aa-inner shadow text-white text-center"
              >
                <div className="border h-full border-white rounded-lg bg-aa-inner p-4">
                  <div className="flex justify-center mb-2">{feature.icon}</div>
                  <h4 className="text-2xl font-bold">{feature.title}</h4>
                  <p className="mt-4 text-lg">{feature.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* services & form section - start */}
      <Container classes="flex flex-col-reverse lg:flex-row gap-3 mt-8 mb-20">
        <div className="flex-1 p-4 ">
          <h2 className="font-bold text-6xl text-center py-2 mb-5 text-aa-outer ">
            Our Services
          </h2>
          <div className="flex">
            <div className="mx-auto">
              {services.map((service) => (
                <div
                  key={`service-${service.id}`}
                  className="ml-8 my-4 flex items-center"
                >
                  <span className="mr-4">
                    <FaFileAlt className="mr-2 text-[#DEBE26]" size={24} />
                  </span>
                  <span className="font-serif text-lg text-aa-inner">
                    {service.description}
                  </span>
                </div>
              ))}
              <div className="flex flex-col lg:flex-row justify-center">
                <a
                  href={`https://wa.me/919949883658?text=${message?.whatsappMessage}`}
                  target="_blank"
                  className="flex"
                >
                  <button
                    role="link"
                    className="flex items-center justify-center p-2 px-4 m-2 mx-auto lg:mx-2 w-36 bg-[#25d366] text-white font-semibold rounded "
                  >
                    <FaWhatsapp className="mr-2" size={24} /> WhatsApp
                  </button>
                </a>
                <a href={"tel:+919949883658"} className="" target="_blank">
                  <button
                    role="link"
                    className="flex items-center justify-center p-2 px-4 m-2 mx-auto lg:mx-2 w-36 bg-[#1e498a] text-white font-semibold rounded "
                  >
                    <FaPhone className="mr-2" /> Call
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* service list */}
        </div>
        <div className="flex-1 p-4 lg:border-l">
          <h2
            className="font-bold text-6xl text-center py-2 mb-5 text-aa-outer "
            ref={formRef}
          >
            Get a Callback
          </h2>
          <div className="flex">
            <div className="mx-12 flex-grow">{contactForm}</div>
          </div>
        </div>
      </Container>

      {/* services & form section - end */}

      {/* How it works - start */}
      <div className="bg-aa-inner p-4 py-12">
        <Container classes="">
          {/* workflow list */}
          <h2 className="text-4xl lg:text-6xl text-white text-center font-sans font-black">
            How It Works
          </h2>
          <hr className="mt-4 mb-8 w-1/3 mx-auto" />
          <div className="flex flex-col px-12">
            {workflow.map((step, index) => (
              <div
                key={step.step}
                className="p-4 py-6 bg-slate-200 my-5 rounded-md shadow-lg"
              >
                <h3 className="text-2xl text-aa-blue-1 font-bold mb-3">
                  {index + 1}. {step.title}
                </h3>
                <p className="font-serif text-lg">{step.description}</p>
              </div>
            ))}
          </div>
          {/* stats */}
          <div className="my-12" />
          <h2 className="text-4xl lg:text-6xl text-[#DEBE26] text-center font-sans font-black">
            Our Track Record
          </h2>
          <hr className="mt-4 mb-8 w-1/3 mx-auto" />
          <div className="flex flex-wrap justify-evenly">
            {stats.map((stat) => (
              <div
                key={stat.order}
                className="basis-full md:basis-1/2 lg:basis-1/4 p-5 text-center"
              >
                <h3 className="text-5xl text-white font-bold mb-3">
                  {new Intl.NumberFormat("en-US").format(stat.number)}+
                </h3>
                <p className="font-serif text-lg font-semibold text-[#DEBE26]">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      {/* How it works - end */}

      {/* why choose us section */}
      <div className="bg-white p-4 py-12">
        <Container>
          <div className="flex-1 p-4 ">
            <h2 className="font-black text-6xl text-center py-2 mb-5 text-aa-outer ">
              Why Choose Us?
            </h2>
            <div className="flex">
              <div className="mx-auto">
                {featureList.map((featureListItem) => (
                  <div
                    key={`feature-list-item-${featureListItem.id}`}
                    className="ml-8 my-4 flex items-center"
                  >
                    <span className="mr-4">
                      <FaArrowRight className="mr-2 " size={24} />
                    </span>
                    <span className="font-serif text-lg text-aa-inner">
                      {featureListItem.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* service list */}
          </div>
        </Container>
      </div>

      {/* get in touch button */}
      <div className="mb-20 mt-4">
        <button
          className="flex flex-row items-center mx-auto p-3 px-6 bg-aa-outer text-white text-2xl font-bold hover:animate-bounce rounded-lg shadow hover:shadow-lg"
          onClick={scrollToForm}
        >
          <FaPaperPlane className="mr-2" /> Get in Touch
        </button>
      </div>
      {/* testimonials? */}
    </>
  );
};

export default LandingPage;
