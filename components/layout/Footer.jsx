import React, { useMemo } from "react";

const Footer = ({}) => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return <footer>Copyright © {year} Abroad Assist</footer>;
};

export default Footer;
