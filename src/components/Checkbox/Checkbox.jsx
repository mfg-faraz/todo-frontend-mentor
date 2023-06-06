import React from "react";
import check from "../../assets/images/icon-check.svg";

const gradient =
  "bg-gradient-to-br from-primary-gradient-100 to-primary-gradient-200";

const Checkbox = ({id, isCompleted, onChange }) => {
  /** Render */
  return (
    <div className="flex pr-[24px]">
      <label
        htmlFor={`input-checked-${id}`}
        className={`w-6 h-6 flex rounded-full border border-light-300 dark:border-dark-500
         
         justify-center items-center cursor-pointer
           ${isCompleted && gradient}`}
      >
        {isCompleted && (
          <img src={check} alt="check-icon" className="w-3 h-3" />
        )}
      </label>
      <input
        onChange={onChange}
        type="checkbox"
        id={`input-checked-${id}`}
        className="hidden"
      />
    </div>
  );
};

export default Checkbox;
