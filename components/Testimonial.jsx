import quote from "assets/icons/quote-left-solid.svg";
import Image from "next/image";

const Testimonial = ({ fullname, comment, title }) => {
  return (
    <div className="flex-1 p-8 bg-white text-start flex flex-col gap-5 border shadow hover:shadow-lg rounded-lg">
      <Image
        src={quote}
        alt="quote"
        width={32}
        height={32}
        loading="lazy"
        className="hover:animate-pulse "
      />
      <blockquote className="font-serif">{comment}</blockquote>
      <div className="">
        <span className="font-medium capitalize font-sans block text-aa-outer">
          {fullname}
        </span>
        <span className="text-gray-600 font-sans block">{title}</span>
      </div>
    </div>
  );
};

export default Testimonial;
