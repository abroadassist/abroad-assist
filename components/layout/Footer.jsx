import React, { useMemo } from "react";

const Footer = ({}) => {
  const year = useMemo(() => new Date().getFullYear(), [second]);

  return <footer>Copyright (c) {year} Abroad Assist</footer>;
};

export default Footer;
