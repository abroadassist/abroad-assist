import Link from "next/link";

const Header = ({}) => {
  const pages = [
    {
      label: "Home",
      path: "",
    },
    {
      label: "Our Services",
      path: "/our-services",
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <header>
      <nav>
        <h2>Abroad Assist</h2>
        {pages.map((page, index) => (
          <Link href={page.path}>{page.label}</Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
