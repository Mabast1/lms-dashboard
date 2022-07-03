import React from "react";
import { Link, NavLink } from "react-router-dom";
import ReactToolTip from "react-tooltip";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

import { links } from "../data/data";
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center bg-light-gray gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 text-black";
  const normalLink =
    "flex text-slate-50 items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-300 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 hover:text-black";

  return (
    <div className="pl-3 pr-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-[#1d2327] dark:bg-secondary-dark-bg">
      {activeMenu && (
        <>
          <div className="flex justify-start items-start">
            <button
              type="button"
              data-tip="Shrink Menu"
              data-type="light"
              className="text-2xl text-purple-100 hover:text-[#6051bb] rounded-full p-3 hover:bg-light-gray mt-4 ml-2 block"
              onClick={() => setActiveMenu(false)}
            >
              <TbLayoutSidebarLeftCollapse />
            </button>
            <ReactToolTip place="right" effect="solid" />
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 mt-4 uppercase m-3">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.path}`}
                    key={links.name}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <span className="text-xl">{link.icon}</span>{" "}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
