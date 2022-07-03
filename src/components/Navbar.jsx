import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReactToolTip from "react-tooltip";
import { Link } from "react-router-dom";

import profile from "../data/profile.png";
import logo from "../data/logo.jpg";
import { Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";

const NavButton = ({ title, customFun, icon, color, dotColor }) => (
  <>
    <button
      type="button"
      data-tip={title}
      style={{ color }}
      onClick={customFun}
      className=" relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: color }}
        className=" absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "
      >
        {icon}
      </span>
    </button>
    <ReactToolTip place="right" effect="solid" />
  </>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <>
      <div className=" flex justify-between p-2 md:mx-6 relative w-24">
        <Link to="./">
          <img src={logo} alt="logo" className="-my-2" />
        </Link>
      </div>
      <NavButton title="Chat" />
    </>
  );
};

export default Navbar;
