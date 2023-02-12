import Header from "./Header";
import Meta from "./Meta";
import Footer from "./Footer";

const LayoutWrapper = ({ children, siteTitle, siteDescription }) => {
  return (
    <div>
      <Meta
        {...{
          siteTitle,
          siteDescription,
        }}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
