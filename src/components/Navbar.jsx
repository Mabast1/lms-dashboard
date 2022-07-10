import React, { useEffect } from "react";
import { BiMessageSquareDots, BiBell } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReactToolTip from "react-tooltip";
import { Link } from "react-router-dom";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

import profile from "../data/profile.png";
import logo from "../data/logo.jpg";
import { Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";
import useAuthStore from "../store/authStore";

const NavButton = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
  text,
  size,
  mrg,
}) => (
  <>
    <button
      type="button"
      data-tip={title}
      style={{ color }}
      onClick={customFunc}
      className={`relative text-${size} rounded-full p-3 hover:bg-light-gray -ml-${mrg}`}
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex items-center justify-center rounded-full h-3 w-3 right-1 top-1 p-2"
      >
        <p className="text-sm text-gray-100">{text}</p>
      </span>
      {icon}
    </button>
    <ReactToolTip effect="solid" />
  </>
);

const Navbar = () => {
  const { userProfile } = useAuthStore();
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    smallActiveMenu,
    setSmallActiveMenu,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
      setSmallActiveMenu(false);
    } else {
      setActiveMenu(true);
      setSmallActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    <div className="flex justify-between p-2 px-7 relative h-16 bg-white shadow-sm">
      {!smallActiveMenu && !activeMenu && (
        <>
          <NavButton
            title="Menu"
            customFunc={() =>
              setActiveMenu((prevActiveMenu) => !prevActiveMenu)
            }
            color="#1d2327"
            icon={<TbLayoutSidebarLeftExpand />}
            size="2xl"
            mrg="4"
          />
        </>
      )}
      <Link to="./" className="pl-3">
        <img src={logo} alt="logo" className="-my-2 w-20" />
      </Link>
      <div className="flex ml-auto">
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color="#1d2327"
          dotColor="#1d2327"
          icon={<BiMessageSquareDots />}
          size="xl"
          text="4"
        />
        <NavButton
          title="Notification"
          customFunc={() => handleClick("notification")}
          color="#1d2327"
          dotColor="#1d2327"
          icon={<BiBell />}
          size="xl"
          text="7"
        />
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick("userProfile")}
          data-tip="Profile"
        >
          {userProfile.image && (
            <img
              src={userProfile.image}
              className="rounded-full w-9 h-9"
              alt="avatar"
            />
          )}

          <p className="hidden sm:inline-flex">
            <span className="text-gray-800 text-16">Hi, </span>
            <span className="text-gray-800 font-semibold ml-1 text-16">
              {userProfile.userName.split(" ").slice(0, -1).join(" ")}
            </span>
          </p>
          <MdKeyboardArrowDown className="text-gray-800 text-16" />
        </div>

        <ReactToolTip place="Bottom" />

        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
