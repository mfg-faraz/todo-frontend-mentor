import React from "react";
import Switcher from "../Switcher/Switcher";

const Header = () => {
  return (
    <div className="flex justify-between mb-10">
      <h1 className="font-bold text-4xl tracking-[10px] text-light-100  dark:text-white">TODO</h1>
      <Switcher />
    </div>
  );
};

export default Header;
