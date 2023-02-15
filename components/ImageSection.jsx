import Image from "next/image";
import abroadImage from "assets/images/abroad-study.jpg";

const ImageSection = ({
  children,
  sectionTitle,
  imageSrc = abroadImage,
  flip = false,
}) => {
  return (
    <section
      className={`flex flex-col-reverse ${
        !!flip ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="flex-1 px-4">
        {!!sectionTitle && (
          <h2 className="font-bold text-center lg:text-start text-4xl py-2 pb-8 text-slate-700 ">
            {sectionTitle}
          </h2>
        )}
        <div className="text-slate-500 md:px-10 lg:px-4">{children}</div>
      </div>
      <div className="flex-1 p-5 mx-auto">
        <Image
          alt="About Abroad Assist"
          src={imageSrc}
          width={540}
          height={360}
          loading="lazy"
          className="rounded-lg hover:animate-pulse active:animate-pulse"
        />
      </div>
    </section>
  );
};

export default ImageSection;
