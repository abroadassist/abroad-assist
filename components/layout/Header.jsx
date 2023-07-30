import React, { useState } from "react";
import Container from "components/wrappers/Container";
import PagesMenu from "./PagesMenu";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";
import SideMenu from "./SideMenu";

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleSideMenu = () => {
    setShowSideMenu((state) => !state);
  };

  return (
    <header className="m-0 shadow-lg">
      <nav className="md:px-3">
        <Container>
          <div className=" flex flex-row justify-between items-center w-full h-14 px-6">
            <div className="inline-flex md:hidden items-center">
              <Hamburger onClick={toggleSideMenu} />
            </div>
            <Link href="/">
              <Image alt="Abroad Assist ®" src="/assets/images/registered-logo.png" width={200} height={30} />
            </Link>

            <div className="w-full hidden lg:flex lg:justify-end">
              <PagesMenu />
            </div>
            <Link
              href="/contact"
              className="flex ml-auto text-slate-200 bg-aa-inner hover:bg-blue-500 hover:shadow-md p-2 rounded-full md:rounded-md transition-colors ease-in-out hover:animate-pulse"
            >
              <span className="hidden md:block">Contact</span>
              <FaPhone className="md:ml-2" size={24} />
            </Link>

            <hr className="block md:hidden h-1 " />
          </div>
          <div className="w-full hidden md:flex justify-center lg:hidden">
            <hr className="h-1 my-1 bg-gray-500 border-0 dark:bg-gray-700" />
            <PagesMenu />
          </div>
          {showSideMenu && <SideMenu />}
        </Container>
      </nav>
    </header>
  );
};

const Hamburger = ({ onClick }) => {
  return (
    <button
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      type="button"
      className=" mr-3 p-2 text-sm text-aa-outer hover:text-slate-200 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onClick={onClick ?? null}
    >
      <span className="sr-only">Open sidebar</span>
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>
  );
};

export default Header;
