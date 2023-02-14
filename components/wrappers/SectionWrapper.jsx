import Container from "./Container";

const SectionWrapper = ({
  children,
  sectionTitle,
  heading,
  subheading,
  childWrapperClasses,
}) => {
  return (
    <Container classes={`text-center pt-6 pb-10 px-4`}>
      <h4 className="uppercase font-bold py-3 tracking-widest text-aa-inner">
        {sectionTitle}
      </h4>
      <h2 className="font-bold text-6xl py-2 text-slate-900 ">{heading}</h2>
      <h3 className="text-lg py-3 mt-5 mb-12 md:px-10 text-slate-700 ">
        {subheading}
      </h3>
      <div className={` ${childWrapperClasses}`}>{children}</div>
    </Container>
  );
};

export default SectionWrapper;
