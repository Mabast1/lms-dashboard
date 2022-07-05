import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../components";
import { dashboardButtons } from "../data/data";

const Dashbord = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap lg:flex-wrap justify-center">
        <div className="bg-white w-11/12 overflow-y-hidden m-3 rounded-xl drop-shadow-sm">
          <div className="w-full flex justify-center ">
            <div className="w-full p-8" style={{ backgroundColor: "#614dbc" }}>
              <div>
                <div className="flex flex-wrap flex-row items-center justify-evenly md:flex-row ">
                  <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                    <div className="text-center">
                      <p className=" text-xl italic text-gray-200">
                        Announcements
                      </p>
                      <p className="text-3xl text-white">
                        Implementation Training{" "}
                      </p>
                      <p className=" text-xl font-semibold  text-gray-200 mt-4">
                        Become familiar with STEAM On Demand℠ in three easy
                        steps.
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button
                      color="white"
                      bgColor={"#614fff"}
                      text="Go to Training & Knowledge Base"
                      borderRadius="lg"
                      size="md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full m-3 flex-wrap justify-center gap-3 items-center">
          {dashboardButtons.map((item) => (
            <div
              key={item.title}
              className=" flex flex-col 2xl:w-72 bg-white drop-shadow-sm dark:text-gray-200 dark:bg-secondary-dark-bg md:w-80 p-1 pt-5 rounded-2xl"
            >
              <div className="flex mb-4 items-center gap-5 px-4">
                <div
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="text-2xl rounded-full p-4 "
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-lg">
                    <span>{item.count}</span>
                    <span className="font-semibold ml-2">{item.title}</span>
                  </p>
                </div>
              </div>

              <div className=" text-center border-t-1 border-blue-100 py-3">
                {/* <p className="text-lg text-black font-semibold mt-1">
                    {item.title}
                  </p> */}
                <Link to={item.path} className="text-blue-800 font-semibold ">
                  <button
                    type="button"
                    className="hover:bg-blue-100 rounded-lg px-4 py-1"
                  >{`${item.count ? "View All" : "View"}`}</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
