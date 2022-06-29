import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { registerLicense } from "@syncfusion/ej2-base";

import "./App.css";

// Registering Syncfusion license key
registerLicense(
  "ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkNhUH5bcnNQRmJeU0Y="
);

const App = () => {
  const activeMenu = true;

  return (
    <div className="underline text-3xl">
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4">
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "Black", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar - 0</div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : " flex-2"
            }`}
          >
            <div className="navbar fixed md:static bg-main-bg dark:bg-main-dark-bg ">
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element="Dashboard" />
              <Route path="/dashboard" element="Dashboard" />

              {/* Pages */}
              <Route path="/profile" element="My Profile" />
              <Route path="/courses" element="My Courses" />
              <Route path="/lessons" element="All Lessons" />
              <Route path="/organizations" element="My Organizations" />

              {/* Apps & Resources */}
              <Route path="/resources" element="Resources" />
              <Route path="/calendar" element="My Calendar" />
              <Route path="/codechampions" element="Code Codechampions" />

              {/* Misc */}
              <Route path="/knowledgebase" element="knowledge Base" />
              <Route path="/feedback" element="Feedback" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
