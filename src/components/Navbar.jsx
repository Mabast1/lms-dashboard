import React, { useEffect } from "react";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReactToolTip from "react-tooltip";
import { Link } from "react-router-dom";

import profile from "../data/profile.png";
import logo from "../data/logo.jpg";
import { Chat, Notification, UserProfile } from ".";

const NavButton = ({ title, customFun, icon, color, dotColor }) => (
  <>
    <button
      type="button"
      data-tip={title}
      style={{ color }}
      onClick={customFun}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: color }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      >
        {icon}
      </span>
    </button>
    <ReactToolTip effect="solid" />
  </>
);

const Navbar = () => {
  const handleClick = () => {};

  return (
    <>
      <div className="flex justify-between p-2 md:px-7 relative h-16 bg-white">
        <Link to="./">
          <img src={logo} alt="logo" className="-my-2 w-20" />
        </Link>
        <div className="flex">
          <NavButton
            title="Chat"
            customFunc={() => handleClick("chat")}
            color="black"
            dotColor="black"
            icon={<BsChatLeft />}
          />
          <NavButton
            title="Notification"
            customFunc={() => handleClick("notification")}
            color="black"
            dotColor="black"
            icon={<RiNotification3Line />}
          />
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
            data-tip="Profile"
          >
            <img src={profile} className="rounded-full w-8 h-8" alt="avatar" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                Mabast
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
          <ReactToolTip place="Bottom" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
