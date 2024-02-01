import React, { useState, createContext } from "react";
import { Applications } from "../applications/applications";

export const WindowContext = createContext();

export const WindowProvider = (props) => {
  const applications = Applications;
  const [activeWindows, setActiveWindow] = useState([applications[0]]);

  const openWindow = (application) => {
    if (application.type === "link") {
      window.open(application.link, "_blank");
      return;
    }

    const windowExists = activeWindows.some((window) => {
      return window.id === application.id;
    });
    if (!windowExists) {
      setActiveWindow([...activeWindows, application]);
    }
  };

  const closeWindow = (application) => {
    setActiveWindow(
      activeWindows.filter((window) => {
        return window.id !== application.id;
      })
    );
  };

  return (
    <WindowContext.Provider
      value={{ applications, activeWindows, openWindow, closeWindow }}
    >
      {props.children}
    </WindowContext.Provider>
  );
};