import CTASection from "components/CTASection";
import PageHeading from "components/PageHeading";
import LayoutWrapper from "components/layout/LayoutWrapper";
import Container from "components/wrappers/Container";
import Image from "next/image";

import phoneIcon from "assets/icons/phone-solid.svg";
import emailIcon from "assets/icons/at-solid.svg";
import whatsappIcon from "assets/icons/whatsapp.svg";
import instagramIcon from "assets/icons/instagram.svg";
import ContactForm from "components/forms/ContactForm";

const contacts = [
  {
    title: "Phone",
    link: "tel:+91994988365",
    icon: phoneIcon,
    text: "(+91) 994-988-365",
  },
  {
    title: "Email",
    link: "mailto:contact@abroadassist.net",
    icon: emailIcon,
    text: "contact@abroadassist.net",
  },
  {
    title: "WhatsApp",
    link: "https://wa.me/919949883658?text=Hi",
    icon: whatsappIcon,
    text: 'Send a "Hi"',
  },
];

const socials = [
  {
    title: "Instagram",
    link: "https://www.instagram.com/abroad_assist/",
    icon: instagramIcon,
  },
];

const ContactUs = () => {
  return (
    <LayoutWrapper>
      <PageHeading
        {...{
          heading: "Contact",
        }}
      />

      <Container {...{ classes: "mb-8 py-10 px-8" }}>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex-1 p-4 ">
            <div className="mb-6">
              <Heading
                {...{
                  title: "Get in Touch",
                  heading: "Contact Details",
                }}
              />
              <div className="my-3">
                {contacts.map((contact) => {
                  return (
                    <div
                      className="flex gap-3 my-4"
                      key={`contact-${contact.title}`}
                    >
                      <ContactIcon
                        {...{
                          src: contact.icon,
                          alt: contact.title,
                          link: contact.link,
                        }}
                      />
                      <div className="">
                        <h4 className="text-xl font-bold ">{contact.title}</h4>

                        <a
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {contact.text}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mb-6">
              <Heading
                {...{
                  title: "Socials",
                  heading: "Follow Us",
                }}
              />
              <div className="flex">
                {socials.map((social) => (
                  <ContactIcon
                    key={`social-link-${social.title}`}
                    {...{
                      src: social.icon,
                      alt: social.title,
                      link: social.link,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 p-4 border-l">
            <Heading
              {...{
                title: "HAVE SOME QUESTIONS FOR US?",
                heading: "Fill the Form",
              }}
            />
            <ContactForm />
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <CTASection
        {...{
          heading: "Check our services out",
          subheading:
            "WE, AT ABROAD ASSIST ARE PASSIONATE ABOUT WRITING. WE ARE HAPPY TO HELP YOU FULFIL YOUR ACADEMIC AND PROFESSIONAL GOALS",
          path: "/our-services",
          buttonText: "Our Services",
        }}
      />
    </LayoutWrapper>
  );
};

const Heading = ({ title, heading }) => (
  <>
    <h4 className="uppercase font-bold py-1 tracking-widest text-aa-inner">
      {title}
    </h4>
    <h2 className="font-bold text-4xl py-2 text-slate-900 ">{heading}</h2>
  </>
);

const ContactIcon = ({ link, src, alt = "contact", sizeInPx = 24 }) => (
  <a
    href={link}
    target="_blank"
    className="rounded-full bg-[#e8eefc] p-4 hover:animate-pulse hover:shadow-md"
  >
    <Image
      {...{
        src,
        width: sizeInPx,
        height: sizeInPx,
        loading: "lazy",
        alt,
        className: "",
      }}
    />
  </a>
);

export default ContactUs;
