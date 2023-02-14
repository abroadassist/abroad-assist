import Container from "components/wrappers/Container";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const pages = [
  {
    label: "Home",
    path: "/",
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
const Header = ({}) => {
  const router = useRouter();

  return (
    <header className="m-0 shadow-lg">
      <nav className="py-4 px-3">
        <Container>
          <div className=" flex flex-col md:flex-row justify-between items-center">
            <Link href="/">
              <Image
                alt="Abroad Assist ®"
                src="/assets/images/registered-logo.png"
                width={200}
                height={30}
              />
            </Link>
            <div className="my-4 md:my-0 flex flex-col sm:flex-row justify-evenly">
              {pages.map((page, index) => {
                const isCurrentPage = router?.pathname === page.path;
                return (
                  <Link href={page.path} className="sm:m-1 my-3 mx-auto">
                    <span
                      key={"nav-link-" + index}
                      className={`py-3 px-6 capitalize text-lg font-semibold hover:bg-slate-200 rounded-md transition-colors duration-300 ease-in-out shadow-none ${
                        isCurrentPage ? "bg-slate-300 text-aa-outer shadow" : ""
                      }`}
                    >
                      {page.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
