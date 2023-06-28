import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Moon from "../assets/Icons/moon";
import MoonOutline from "../assets/Icons/moonOutline";

const NavBar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.themeSlice.darkMode);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      dispatch({ type: "data/themeReducer", payload: true });
    } else {
      dispatch({ type: "data/themeReducer", payload: false });
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  const darkModeHandler = () => {
    dispatch({ type: "data/themeReducer", payload: !isDarkMode });
  };

  return (
    <header className="h-[80px] flex justify-between items-center px-4 bg-[#fff] dark:bg-[#2B3844] dark:text-white sm:px-20 ">
      <h1 className="sm:text-2xl text-base font-extrabold">
        Where in the world?
      </h1>
      <div
        className="flex gap-2 items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={darkModeHandler}
        aria-hidden={true}
      >
        {isDarkMode ? <Moon /> : <MoonOutline />}
        <p className="sm:text-base text-xs font-semibold ">Dark Mode</p>
      </div>
    </header>
  );
};

export default NavBar;
