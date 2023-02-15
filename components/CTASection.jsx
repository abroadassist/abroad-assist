import Link from "next/link";
import Container from "./wrappers/Container";

const CTASection = ({
  subheading,
  heading,
  path = "/contact",
  buttonText = "Get in Touch",
}) => {
  return (
    <div className="bg-aa-inner">
      <Container classes={`text-center pt-10 pb-16 px-8`}>
        <h4 className="uppercase font-bold py-3 tracking-widest text-slate-300">
          {subheading}
        </h4>
        <h2 className="font-bold text-2xl py-2 text-white mb-8">{heading}</h2>
        <Link href={path}>
          <button
            role="link"
            className="mr-4  py-3 px-6 rounded-full font-semibold border shadow bg-slate-100 text-slate-900 hover:bg-transparent hover:text-slate-100"
          >
            {buttonText}
          </button>
        </Link>
      </Container>
    </div>
  );
};

export default CTASection;
