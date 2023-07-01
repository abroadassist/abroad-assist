import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";
import { TbWriting } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";

const pages = [
  {
    label: "Home",
    path: "/",
    icon: <FaHome size={52} />,
  },
  {
    label: "Our Services",
    path: "/our-services",
    icon: <TbWriting size={52} />,
  },
  {
    label: "About Us",
    path: "/about",
    icon: <RiTeamFill size={52} />,
  },
];

const PagesMenu = () => {
  const router = useRouter();

  return (
    <div className="mt-2 mb-1 md:my-0 flex flex-col md:flex-row md:w-3/4 md:justify-evenly">
      {pages.map((page) => {
        const isCurrentPage = router?.pathname === page.path;
        return (
          <Link key={"nav-link-" + page.path} href={page.path} className="">
            <HeaderNavItem {...{ label: page?.label, isCurrentPage }} />
            <SideNavItem {...{ label: page?.label, icon: page?.icon, isCurrentPage }} />
          </Link>
        );
      })}
    </div>
  );
};

const HeaderNavItem = ({ isCurrentPage = false, label = "" }) => {
  return (
    <span
      className={`hidden md:block md:mb-2 lg:mb-0 py-1 px-3 capitalize text-5xl md:text-lg font-semibold hover:bg-slate-200 rounded-md transition-colors duration-300 ease-in-out shadow-none ${
        isCurrentPage ? "bg-slate-300 text-aa-outer shadow" : ""
      }`}
      title={label}
    >
      {label}
    </span>
  );
};

const SideNavItem = ({ isCurrentPage = false, label = "", icon }) => {
  return (
    <span
      className={`block md:hidden font-semibold text-start text-5xl py-20 pl-4 hover:bg-slate-200 group transition-all duration-1000 ease-in-out ${
        isCurrentPage ? "bg-slate-400 " : "bg-slate-300"
      }`}
      title={label}
    >
      {label}
      <span className="ml-4 fixed opacity-0 group-hover:opacity-100 group-hover:slide-in-blurred-left">{icon}</span>
    </span>
  );
};

export default PagesMenu;
