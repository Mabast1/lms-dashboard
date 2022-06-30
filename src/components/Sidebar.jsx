import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard, MdAnalytics, MdOutlineCancel } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/data";
import logo from "../data/logo.jpg";

const Sidebar = () => {
  const activeMenu = true;

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex text-slate-50 items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-300 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 hover:text-black";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-center items-center">
            <Link
              to="/"
              onClick={() => {}}
              className="items-center gap-3 mt-4 flex text-xl font-extrabold tracking-tight w-20"
            >
              <img src={logo} alt="logo" />
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                className="text-xl text-purple-200 hover:text-purple-800 rounded-full p-3 hover:bg-light-gray mt-4 block"
                onClick={() => {}}
              >
                <AiOutlineMenu />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 mt-4 uppercase m-3">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={links.name}
                    onClick={() => {}}
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