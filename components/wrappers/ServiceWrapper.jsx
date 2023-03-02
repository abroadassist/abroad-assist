import ImageSection from "components/ImageSection";
import Link from "next/link";

const ServiceWrapper = ({ children, sectionTitle, imageSrc, flip, button }) => (
  <div className="mb-12 p-2 py-5 rounded-xl bg-slate-50 lg:bg-transparent active:shadow-lg hover:shadow-lg active:bg-slate-50 hover:bg-slate-50">
    <ImageSection {...{ sectionTitle, imageSrc, flip }}>
      {children}
      {!!button ? (
        <div className="flex w-full">
          <Link href={button?.path || "/"} className="md:my-4 w-full mx-4">
            <button
              role="link"
              className=" w-full py-1 px-2 rounded-lg font-semibold border border-aa-inner shadow bg-aa-inner text-slate-100 hover:bg-transparent hover:text-aa-inner"
            >
              {button?.text ?? "Learn More"}
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </ImageSection>
  </div>
);

export default ServiceWrapper;
