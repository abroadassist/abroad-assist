const { default: TopBannerWrapper } = require("./wrappers/TopBannerWrapper");

const PageHeading = ({ heading }) => {
  return (
    <TopBannerWrapper>
      <div className="py-24">
        <h1 className="text-center lg:text-start text-6xl font-black">
          {heading}
        </h1>
      </div>
    </TopBannerWrapper>
  );
};

export default PageHeading;
