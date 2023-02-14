// library imports
import Image from "next/image";
import Link from "next/link";

// custom components
import TopBannerWrapper from "components/wrappers/TopBannerWrapper";
import LayoutWrapper from "components/layout/LayoutWrapper";

// assets & styles
import BannerImage from "assets/images/home-banner-image.png";

const Home = () => {
  return (
    <LayoutWrapper>
      <TopBannerWrapper>
        <div className="flex flex-row">
          <div className="flex-auto w-64 py-5 px-8 pr-16">
            <h1 className="py-3 text-4xl font-bold font-sans leading-relaxed">
              You got all what it takes to make it to your dream university.
            </h1>
            <h3 className="py-3 text-lg font-sans leading-6">
              Perhaps expressing yourself on paper is not your forte.
              <br />
              But it certainly is ours.
            </h3>
            <div className="flex flex-row justify-items-start mt-8">
              <Link href="/our-services">
                <button
                  role="link"
                  className="mr-4 py-3 px-6 rounded-full font-semibold border shadow bg-slate-100 text-slate-900 hover:bg-transparent hover:text-slate-100"
                >
                  Our Services
                </button>
              </Link>
              <Link href="/contact">
                <button
                  role="link"
                  className="mr-4 py-3 px-6 rounded-full font-semibold border shadow hover:bg-slate-100 hover:text-slate-900"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-auto w-32">
            <Image
              alt="airplane flying around globe"
              src={BannerImage}
              width={400}
              height={400}
            />
          </div>
        </div>
      </TopBannerWrapper>
    </LayoutWrapper>
  );
};

export default Home;
