import React from "react";
import Container from "./Container";

const TopBannerWrapper = ({ children }) => {
  return (
    <section className="m-0 py-3 px-5 bg-aa-blue-1 text-slate-100">
      <Container>{children}</Container>
    </section>
  );
};

export default TopBannerWrapper;
