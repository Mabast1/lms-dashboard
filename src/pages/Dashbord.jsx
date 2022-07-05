import React from "react";

import { Button } from "../components";
import Profile from "./Profile";

const Dashbord = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap lg:flex-wrap justify-center">
        <div className="bg-white overflow-y-hidden m-3 rounded-xl">
          <div className="w-full flex justify-center">
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
                  <div className="mt-6">
                    <Button
                      color="white"
                      bgColor={"#614fff"}
                      text="Go to Training & Knowledge Base"
                      borderRadius="10px"
                      size="md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
