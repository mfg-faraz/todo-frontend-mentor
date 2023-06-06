import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

const Input = ({ onSubmit }) => {
  /** use State Hooks */
  const [isCompleted, setIsCompleted] = useState(false);
  const [text, setText] = useState("");
  
  /** Handlers */
  const submitHandler = () => {
    onSubmit({ text, isCompleted });
    setIsCompleted(false);
    setText("");
  };
  
  /** Render */
  return (
    <div className="bg-light-100 dark:bg-dark-200 rounded-md flex items-center px-5">
      <Checkbox
        id="input"
        isCompleted={isCompleted}
        onChange={(e) => {
          setIsCompleted(e.target.checked);
        }}
      />
      <input
        type="text"
        className="w-full py-3 outline-none text-lg font-normal bg-transparent pt-4 dark:text-dark-300 placeholder:text-light-400 dark:placeholder:text-dark-400"
        placeholder="Create a new todo..."
        onKeyUp={(e) =>
          (e.code === "Enter" || e.code === "NumpadEnter") && submitHandler()
        }
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
