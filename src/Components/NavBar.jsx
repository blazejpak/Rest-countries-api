import React from "react";
import { MoonOutline } from "react-ionicons";

const NavBar = () => {
  return (
    <header className="h-[80px] flex justify-between items-center px-20 bg-[#fff]">
      <h1 className="text-2xl">Where in the world?</h1>
      <div className="flex gap-2 items-center justify-center">
        <MoonOutline />
        <p>Dark Mode</p>
      </div>
    </header>
  );
};

export default NavBar;
