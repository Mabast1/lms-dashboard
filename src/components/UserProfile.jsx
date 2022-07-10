import React from "react";
import { googleLogout } from "@react-oauth/google";
import { MdLogout } from "react-icons/md";

import { useStateContext } from "../context/ContextProvider";
import useAuthStore from "../store/authStore";

const UserProfile = () => {
  const { setIsClicked } = useStateContext();
  const { addUser } = useAuthStore();

  return (
    <div className="nav-item absolute right-5 md:right-5 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-60 shadow-md">
      <div className="">
        {/* <div className=" flex items-center gap-5  p-3 leading-8 cursor-pointer border-b-1 border-color">
          <p className="font-semibold dark:text-gray-200 ">Profile</p>
        </div> */}
        <div className="">
          <button
            type="button"
            onClick={() => {
              googleLogout();
              setIsClicked(false);
              addUser(null);
            }}
            className=" flex justify-center items-center gap-2 text-md p-3 hover:drop-shadow-xl rounded-lg w-full bg-gray-400"
          >
            <MdLogout className="text-xl" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
