import Header from "./Header";
import Meta from "./Meta";
import Footer from "./Footer";
import GtagScript from "./GtagScript";

const LayoutWrapper = ({ children, siteTitle, siteDescription, gtag = "" }) => {
  return (
    <div>
      <Meta
        {...{
          siteTitle,
          siteDescription,
        }}
      />
      {gtag && <GtagScript GA_MEASUREMENT_ID={gtag} />}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
