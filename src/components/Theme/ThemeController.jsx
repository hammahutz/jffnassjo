import { useEffect, useState } from "react";
import { settings } from "../../store/theme";

const ThemeController = () => {
  const [toggle, setToggle] = useState(settings.get().theme === "light");

  const onClick = (e) => {
    setToggle(e.target.checked);
  };

  useEffect(() => {
    const newTheme = toggle ? "light" : "coffee";
    settings.setKey("theme", newTheme);
    document.querySelector("#root").setAttribute("data-theme", settings.get().theme);
  }, [toggle]);

  return (
    <label className="flex cursor-pointer gap-2">
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
      <input defaultChecked={toggle} type="checkbox" className="toggle theme-controller" onClick={(e) => onClick(e)} />

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
    </label>
  );
};

export default ThemeController;
<script>import {settings} from "../store/theme";</script>;
