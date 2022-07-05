import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import ReactToolTip from "react-tooltip";
import { registerLicense } from "@syncfusion/ej2-base";

import {
  Navbar,
  Footer,
  Sidebar,
  SmallSidebar,
  ThemeSettings,
} from "./components";
import {
  Dashboard,
  Courses,
  Calendar,
  Profile,
  CodeCh,
  Feedback,
  Lessons,
  Organizations,
  Resources,
} from "./pages";
import "./App.css";
import { useStateContext } from "./context/ContextProvider";

// Registering Syncfusion license key
registerLicense(
  "ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkNhUH5bcnNQRmJeU0Y="
);

const App = () => {
  const { activeMenu, smallActiveMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4">
            <button
              type="button"
              data-tip="Settings"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: "Black", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
            <ReactToolTip effect="solid" backgroundColor="#1d2327" />
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : smallActiveMenu ? (
            <div className="w-20 dark:bg-secondary-dark-bg">
              <SmallSidebar />
            </div>
          ) : (
            <div></div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : " flex-2"
            }`}
          >
            <div className="navbar static bg-main-bg dark:bg-main-dark-bg ">
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Pages */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="/organizations" element={<Organizations />} />

                {/* Apps */}
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/codechampions" element={<CodeCh />} />

                {/* Misc */}
                <Route path="/resources" element={<Resources />} />
                <Route path="/knowledgebase" element="knowledge Base" />
                <Route path="/feedback" element={<Feedback />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
