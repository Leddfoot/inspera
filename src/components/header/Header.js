import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Header.scss";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const timeRemainingLocal = useSelector((state) => state.time.timeRemainingLocal);

  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty(
      "--mpc-interaction--label-background",
      darkTheme ? "black" : "white"
    );
    root?.style.setProperty(
      "--theme-toggle--border-left",
      darkTheme ? "2px solid white" : "2px solid black"
    );
    root?.style.setProperty(
      "--mpc-interaction--label-color",
      darkTheme ? "white" : "black"
    );
  }, [darkTheme]);
  return (
    <div
      className="header"
      style={{ backgroundColor: "--mpc-interaction--label-background" }}
    >
      <div className="header-text">
        <div className="candidate">Front-end Test Candidate</div>
        <div className="time-remaining">{timeRemainingLocal} seconds remaining</div>
      </div>
      <button
        onClick={() => setDarkTheme(!darkTheme)}
        type="button"
        className="theme-toggle"
      >
        {!darkTheme ? "Dark mode 😎" : "Light Mode 😀"}
      </button>
    </div>
  );
};

export default Header;
