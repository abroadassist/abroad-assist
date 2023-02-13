import React, { useMemo } from "react";

const Footer = ({}) => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="m-0 py-4 mx-auto flex flex-row justify-center bg-aa-inner text-slate-100 font-sans font-thin">
      <span className="">Copyright © {year} Abroad Assist</span>
    </footer>
  );
};

export default Footer;
