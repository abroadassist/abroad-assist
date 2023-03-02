// custom components
import CTASection from "components/CTASection";
import PageHeading from "components/PageHeading";
import LayoutWrapper from "components/layout/LayoutWrapper";
import Container from "components/wrappers/Container";
import ServiceWrapper from "components/wrappers/ServiceWrapper";

// assets
import sopImage from "assets/images/sop.jpg";
import filingImage from "assets/images/filling-app.jpg";
import interviewImage from "assets/images/interview.jpg";
import lorImage from "assets/images/lor.jpg";
import questionImage from "assets/images/question.jpg";
import resumeImage from "assets/images/resume.jpg";
import shortlistingImage from "assets/images/shortlisting.jpg";

const OurServices = () => {
  return (
    <LayoutWrapper>
      <PageHeading heading="Our Services" />
      <Container classes="p-12">
        {/* Statement of Purpose (SOP) */}
        <ServiceWrapper
          {...{
            sectionTitle: "Statement of Purpose (SOP)",
            imageSrc: sopImage,
            button: {
              text: "Learn More",
              path: "/study-abroad",
            },
          }}
        >
          <ul className="my-2 list-disc pl-3">
            <li>
              You‘ve gained the formal education and experience but when you
              can’t stitch it together into a formal written document, we can
              assist.
            </li>
            <li>
              We curate an original letter of intent explaining why you will be
              a valuable addition to the university and program of your choice.
            </li>
            <li>
              Let us help you increase your chances of securing admission. We
              specialize in drafting top-notch SOPs that narrate a compelling
              story.
            </li>
          </ul>
        </ServiceWrapper>

        {/* Letter of Recommendation (LOR) */}
        <ServiceWrapper
          {...{
            sectionTitle: "Letter of Recommendation (LOR)",
            imageSrc: lorImage,
            flip: true,
            button: {
              text: "Learn More",
              path: "/study-abroad",
            },
          }}
        >
          <ul className="my-2 list-disc pl-3">
            <li>
              It is common knowledge that professors in most educational
              institutions are tied up with their day-to-day priorities, leaving
              them little time to spare for drafting a LOR.
            </li>
            <li>
              This is when we can help. Starting from dentistry and medicine to
              engineering and management, we have drafted countless Letters of
              Recommendation (LORs). As a result, we are proficient in crafting
              letters that can help boost your chances of getting accepted to
              your desired program.
            </li>
          </ul>
        </ServiceWrapper>

        {/* Resume & CV */}
        <ServiceWrapper
          {...{
            sectionTitle: "Resume & CV",
            imageSrc: resumeImage,
            button: {
              text: "Learn More",
              path: "/study-abroad",
            },
          }}
        >
          <ul className="my-2 list-disc pl-3">
            <li>
              A well-formatted, crisp Resume or CV with ZERO grammatical errors
              can help you stand out and improve your chances of getting
              admission into your desired program.
            </li>
            <li>
              Let us
              <ul className="my-2 pl-6 list-disc">
                <li>
                  increase your prospects by formatting your Resume/CV and
                </li>
                <li>or merely eliminate any language or grammar issues.</li>
              </ul>
            </li>
          </ul>
        </ServiceWrapper>

        {/* Supplemental Questions */}
        <ServiceWrapper
          {...{
            sectionTitle: "Supplemental Questions",
            imageSrc: questionImage,
            flip: true,
            button: {
              text: "Learn More",
              path: "/study-abroad",
            },
          }}
        >
          <ul className="my-2 list-disc pl-3">
            <li>
              Supplemental questions, unlike SOPs, require you to answer
              questions that are more specific in nature.
            </li>
            <p className="ml-[-1em] my-2">Here’s how we do it:</p>
            <li>
              We are mindful of the word count and the obligation of having to
              write at least half of the specified word count.
            </li>
            <li>
              We engage our creative writing skills for certain questions that
              require your hobbies, interest and or long-term goals.
            </li>
            <li>Struggling, where to start? Leave it to us. We can assist.</li>
          </ul>
        </ServiceWrapper>

        {/* Interview Training */}
        <ServiceWrapper
          {...{
            sectionTitle: "Interview Training",
            imageSrc: interviewImage,
            button: {
              text: "Learn More",
              path: "/study-abroad",
            },
          }}
        >
          <ul className="my-2 list-disc pl-3">
            <li>
              Your SOP is solid and so are your supplemental questions and the
              resume you’ve submitted. But what about your interview skills?
            </li>
            <li>
              Worry not! We’re here to assist. We conduct a series of mock
              interviews while also providing answers to commonly asked
              questions, helping you get better acquainted with interviews and
              ace them.
            </li>
          </ul>
        </ServiceWrapper>

        {/* Shortlisting Universities */}
        <ServiceWrapper
          {...{
            sectionTitle: "Shortlisting Universities",
            imageSrc: shortlistingImage,
            flip: true,
            button: {
              text: "Learn More",
              path: "/study-abroad",
            },
          }}
        >
          <ul className="my-2 list-disc pl-3">
            <li>
              No matter what program you may be looking to pursue, there is
              generally no dearth of options in terms of the universities to
              choose from – which naturally explains why candidates face
              analysis paralysis.
            </li>
            <li>
              Our experience in shortlisting universities for several hundred
              candidates in the past has helped us develop an informed choice to
              pick the best-suited universities for you to apply to.
            </li>
          </ul>
        </ServiceWrapper>

        {/* Filing & Verifying Grad School Applications */}
        <ServiceWrapper
          {...{
            sectionTitle: "Filing & Verifying Grad School Applications",
            imageSrc: filingImage,
            button: {
              text: "Learn More",
              path: "/study-abroad",
            },
          }}
        >
          <ul className="my-2 list-disc pl-3">
            <li>
              Paperwork can be monotonous and tedious. Having to fill out a
              gazillion details with little to no margin for error can be
              stressful.
            </li>
            <li>
              Fortunately, we’re here to assist. We can help you either fill out
              your grad school application or simply verify your applications
              after you’ve filled them. It doesn’t hurt to have a professional
              entity review your work, or an extra pair of hands do them on your
              behalf.
            </li>
          </ul>
        </ServiceWrapper>
      </Container>

      {/* CTA Section */}
      <CTASection
        {...{
          heading: "What are you waiting for?",
          subheading: "LOOKING TO OPT FOR OUR SERVICES?",
          path: "/contact",
          buttonText: "Contact Us",
        }}
      />
    </LayoutWrapper>
  );
};

export default OurServices;
