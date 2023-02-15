import ImageSection from "components/ImageSection";

const ServiceWrapper = ({ children, sectionTitle, imageSrc, flip }) => (
  <div className="mb-12 p-2 py-5 rounded-xl bg-slate-50 lg:bg-transparent active:shadow-lg hover:shadow-lg active:bg-slate-50 hover:bg-slate-50">
    <ImageSection {...{ sectionTitle, imageSrc, flip }}>
      {children}
    </ImageSection>
  </div>
);

export default ServiceWrapper;
