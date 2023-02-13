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
    <header className="m-0">
      <nav className="sm:container sm:mx-auto py-4 px-3">
        <div className=" flex flex-row justify-between items-center">
          <Link href="/">
            <Image
              alt="Abroad Assist ®"
              src="/assets/images/registered-logo.png"
              width={200}
              height={30}
            />
          </Link>
          <div className="flex flex-row justify-evenly">
            {pages.map((page, index) => {
              const isCurrentPage = router?.pathname === page.path;
              return (
                <Link href={page.path}>
                  <span
                    key={"nav-link-" + index}
                    className={`m-1 p-2 font-semibold hover:bg-slate-200 rounded-md transition-colors duration-300 ease-in-out ${
                      isCurrentPage ? "bg-slate-300 text-aa-outer" : ""
                    }`}
                  >
                    {page.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
