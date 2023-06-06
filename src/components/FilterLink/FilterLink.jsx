import React, { useState } from "react";

const FilterLink = ({ onFilter }) => {
  /** State Hooks */
  const [active, setActive] = useState("all");

  /** Render */
  return (
    <ul className=" items-center gap-4 flex">
      <li
        className={`text-sm font-semibold ${
          active === "all"
            ? "text-primary"
            : "text-light-400 dark:text-dark-400"
        }`}
      >
        <button
          onClick={() => {
            onFilter("all");
            setActive("all");
          }}
          className="pt-2 hover:text-light-500 dark:hover:text-dark-hover"
        >
          All
        </button>
      </li>
      <li
        className={`text-sm font-semibold ${
          active === "active"
            ? "text-primary"
            : "text-light-400 dark:text-dark-400"
        }`}
      >
        <button
          onClick={() => {
            onFilter("active");
            setActive("active");
          }}
          className="pt-2 hover:text-light-500 dark:hover:text-dark-hover"
        >
          Active
        </button>
      </li>
      <li
        className={`text-sm font-semibold ${
          active === "completed"
            ? "text-primary"
            : "text-light-400 dark:text-dark-400"
        }`}
      >
        <button
          onClick={() => {
            onFilter("completed");
            setActive("completed");
          }}
          className="pt-2 hover:text-light-500 dark:hover:text-dark-hover"
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default FilterLink;
