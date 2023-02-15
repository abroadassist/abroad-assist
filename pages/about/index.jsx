// custom components
import ImageSection from "components/ImageSection";
import PageHeading from "components/PageHeading";
import LayoutWrapper from "components/layout/LayoutWrapper";
import Container from "components/wrappers/Container";
import CTASection from "components/CTASection";

// assets
import abroadImage from "assets/images/abroad-study.jpg";

const About = () => {
  return (
    <LayoutWrapper
      {...{
        siteTitle: "About Us | Abroad Assist",
      }}
    >
      <PageHeading heading="About Us" />
      <Container classes={`mb-12 py-10 px-8`}>
        <ImageSection
          {...{
            imageSrc: abroadImage,
          }}
        >
          <p className="my-2">
            Abroad Assist is a premier writing services agency providing
            professional help to abroad aspirants. Led by a doctor-turned-health
            administration professional and an engineer-turned-writer working to
            provide expert help with written documents such as SOPs, LORs, CVs,
            Application Essays, Interviewing training…
          </p>
          <p className="my-2">
            All-in-all, Abroad Assist is not a typical consultancy looking to
            rope in every abroad aspirant; we carefully handpick the clients
            that reach out to us and work with promising candidates to
            supercharge their career prospects. We have helped candidates from
            healthcare (including both dentistry and medicine), engineering, and
            management backgrounds to secure admissions for advanced programs in
            their respective fields.
          </p>
        </ImageSection>
      </Container>
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

export default About;
