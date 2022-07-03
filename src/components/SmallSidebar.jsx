import React from "react";
import { Link, NavLink } from "react-router-dom";
import ReactToolTip from "react-tooltip";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

import { links } from "../data/data";
import { useStateContext } from "../context/ContextProvider";
import { act } from "react-dom/test-utils";

const SmallSidebar = () => {
  const { activeMenu, setActiveMenu, smallActiveMenu, setSmallActiveMenu } =
    useStateContext();

  const activeLink =
    "flex items-center justify-center bg-light-gray p-3 rounded-lg text-white text-md mt-2 text-black";
  const normalLink =
    "flex text-slate-50 items-center justify-center p-3 rounded-lg text-md text-gray-300 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray mt-2 hover:text-black";

  return (
    <div className="pl-3 pr-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-[#1d2327] dark:bg-secondary-dark-bg">
      {smallActiveMenu && (
        <>
          <div className="flex justify-start items-start">
            <button
              type="button"
              data-tip="Open Menu"
              className="text-2xl text-purple-100 hover:text-[#6051bb] rounded-full p-3 hover:bg-light-gray mt-4 ml-2 block"
              onClick={() => setActiveMenu(true)}
            >
              <TbLayoutSidebarLeftExpand />
            </button>
            <ReactToolTip place="right" effect="solid" />
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <div className="m-3">
                  <div className="border-b-1 border-gray-500" />
                </div>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.path}`}
                    key={links.name}
                    onClick={(prevSmallActiveMenu) => !prevSmallActiveMenu}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    data-tip={link.name}
                  >
                    <span className="text-xl">{link.icon}</span>
                  </NavLink>
                ))}
                <ReactToolTip place="right" effect="solid" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SmallSidebar;
