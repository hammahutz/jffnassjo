import { useEffect, useState } from "react";
import { Settings } from "../../store/settings";
import { useStore } from "@nanostores/react";

const ThemeController = () => {
  const currentSettings = useStore(Settings);

  const onClick = (e) => {
    const newTheme = currentSettings.currentTheme === "light" ? "coffee" : "light";
    Settings.set({ currentTheme: newTheme });
  };

  useEffect(() => {
    document.querySelector("#root").setAttribute("data-theme", currentSettings.currentTheme);
  }, [currentSettings]);


  return (
    <button className="btn btn-primary btn-sm w-fit flex cursor-pointer gap-2"onClick={(e) => onClick(e)} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
      <span>/</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
    </button>
  );
};

export default ThemeController;
