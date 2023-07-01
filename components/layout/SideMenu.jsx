import React from "react";
import PagesMenu from "./PagesMenu";

const SideMenu = ({}) => {
  return (
    <aside
      className="fixed top-14 left-0 z-40 w-full h-full bg-white transition-transform md:-translate-x-full translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-0 py-4 overflow-y-hidden bg-slate-200">
        <PagesMenu />
      </div>
    </aside>
  );
};

export default SideMenu;
