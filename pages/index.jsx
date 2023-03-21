// library imports
import Image from "next/image";
import Link from "next/link";

// custom components
import TopBannerWrapper from "components/wrappers/TopBannerWrapper";
import LayoutWrapper from "components/layout/LayoutWrapper";
import Container from "components/wrappers/Container";
import SectionWrapper from "components/wrappers/SectionWrapper";
import Testimonial from "components/Testimonial";
import ImageSection from "components/ImageSection";
import CTASection from "components/CTASection";

// assets & styles
import BannerImage from "assets/images/home-banner-image.png";
import sopIcon from "assets/icons/file-pen-solid.svg";
import lorIcon from "assets/icons/thumbs-up-solid.svg";
import resumeIcon from "assets/icons/file-contract-solid.svg";
import visaIcon from "assets/icons/passport-solid.svg";
import essayIcon from "assets/icons/user-graduate-solid.svg";
import interviewIcon from "assets/icons/user-tie-solid.svg";
import abroadImage from "assets/images/abroad-study.jpg";

const services = [
  {
    label: "Statement of Purpose (SOP)",
    icon: sopIcon,
    path: "/our-services",
  },
  {
    label: "Letter Of Recommendation (LOR)",
    icon: lorIcon,
    path: "/our-services",
  },
  {
    label: "Resume & CV",
    icon: resumeIcon,
    path: "/our-services",
  },
  {
    label: "Visa SOP",
    icon: visaIcon,
    path: "/our-services",
  },
  {
    label: "Admission Essay",
    icon: essayIcon,
    path: "/our-services",
  },
  {
    label: "Interview Training",
    icon: interviewIcon,
    path: "/our-services",
  },
];

const testimonials = [
  {
    fullname: "Lisa",
    comment:
      "I came to know about these guys through a friend of mine when I was looking for someone who could help me write a good SOP and these guys gave me a great one which was customized just for me. They did an awesome job. Highly recommended!I came to know about these guys through a friend of mine when I was looking for someone who could help me write a good SOP and these guys gave me a great one which was customized just for me. They did an awesome job. Highly recommended!",
    title: "Masters in Hospital Administration",
  },
  {
    fullname: "Lalitha",
    comment:
      "I always dreamed of studying abroad. Though I am passionate, I didn’t know how, when, and where to start. I approached ABROAD ASSIST to guide me. They helped me starting from the exams, selecting colleges, sop, resumes, applications, admission interviews till the end. The best part with Abroad Assist is they gave me liberty in choosing universities of my choice and kept me involved throughout the process. I thank the Abroad Assist’s team for helping me to fulfill my dream and molding me in many aspects for my future endeavours",
    title: "Doctor of Dental Surgery",
  },
  {
    fullname: "Zakir",
    comment:
      "Abroad Assist is the best. I got help with my application, resume, personal statement, and interview training. The team at Abroad Assist was precise, on time, patient, and nice. I highly recommend them. Because without them, I would never get accepted in the first admission cycle itself.",
    title: "Doctor of Dental Surgery",
  },
];

const Home = () => {
  return (
    <LayoutWrapper>
      {/* Top Banner - start */}
      <TopBannerWrapper>
        <div className="flex flex-row">
          <div className="flex-auto md:w-64 py-5 px-8  md:pr-16 text-center md:text-start">
            <h1 className="py-3 text-3xl md:text-4xl font-bold font-sans leading-relaxed">
              You got all what it takes to make it to your dream university.
            </h1>
            <h3 className="py-3 text-lg font-sans leading-6">
              Perhaps expressing yourself on paper is not your forte.
              <br />
              But it certainly is ours.
            </h3>
            <div className="flex flex-col md:flex-row justify-items-center md:justify-items-start mt-8 gap-2">
              <Link href="/our-services" className="md:my-2">
                <button
                  role="link"
                  className=" mr-4  py-3 px-6 rounded-full font-semibold border shadow bg-slate-100 text-slate-900 hover:bg-transparent hover:text-slate-100"
                >
                  Our Services
                </button>
              </Link>
              <Link href="/contact" className="md:my-2">
                <button
                  role="link"
                  className="mr-4 py-3 px-6 rounded-full font-semibold border shadow hover:bg-slate-100 hover:text-slate-900"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-auto hidden md:block md:w-32">
            <Image alt="airplane flying around globe" src={BannerImage} width={400} height={400} />
          </div>
        </div>
      </TopBannerWrapper>
      {/* Top Banner - end */}

      {/* Services section - start */}
      <div className="bg-gray-100">
        <SectionWrapper
          {...{
            childWrapperClasses: "mx-auto py-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            sectionTitle: "What we offer",
            heading: "Our Services",
            subheading:
              "Starting from Personal Statements (SOPs) and Letters of Recommendation to Supplemental Questions and CVs, we do it all",
          }}
        >
          {services?.map((service, index) => {
            return (
              <Link href={service.path} className="bg-slate-100 shadow p-4 rounded-md" key={`home-service-${index}`}>
                <div key={`service-${index}`} className="flex flex-row gap-3 hover:animate-pulse">
                  {/* Icon */}
                  <div className="rounded-lg py-3 h-12 w-12">
                    <Image
                      alt={service.label}
                      src={service.icon}
                      width={32}
                      height={32}
                      loading="lazy"
                      className="m-auto"
                    />
                  </div>
                  {/* Title */}
                  <h4 className="py-3 md:py-1 md:text-md text-start text-lg font-medium">{service.label}</h4>
                </div>
              </Link>
            );
          })}
        </SectionWrapper>
      </div>
      {/* Services section - end */}

      {/* About Us section - start */}
      <Container classes={`mb-12 py-10 px-8`}>
        <ImageSection
          {...{
            imageSrc: abroadImage,
            sectionTitle: "About Us",
          }}
        >
          <p className="my-2">
            Abroad Assist is a premier writing services agency providing expert help to abroad aspirants.
          </p>
          <p className="my-2">
            Led by a doctor-turned-health administration professional and an engineer-turned-writer working to fuel your
            abroad dreams, at the end of the day, our goal is not profiteering, but ensuring that you receive
            satisfactory work without having to shell out a fortune.
          </p>
        </ImageSection>
      </Container>
      {/* About Us section - end */}

      {/* Testimonials section - start */}
      <SectionWrapper
        {...{
          sectionTitle: "Testimonials",
          heading: "What Our Clients Say",
          childWrapperClasses: "grid grid-cols-1 lg:grid-cols-2 gap-4 ",
        }}
      >
        {testimonials.map((testimonial, index) => {
          return (
            <Testimonial
              key={`testimonial-${index}`}
              {...{
                comment: testimonial.comment,
                fullname: testimonial.fullname,
                title: testimonial.title,
              }}
            />
          );
        })}
      </SectionWrapper>
      {/* Testimonials section - end */}

      {/* CTA section - start */}
      <CTASection
        {...{
          heading: "Let us supercharge your academic prospects and help you pursue an advanced program of your choice.",
          subheading: "REACH OUT TO US TODAY",
          path: "/contact",
          buttonText: "Contact Us",
        }}
      />
      {/* CTA section - end */}
    </LayoutWrapper>
  );
};

export default Home;
