import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [smallActiveMenu, setSmallActiveMenu] = useState(true);

  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, smallActiveMenu, setSmallActiveMenu }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
