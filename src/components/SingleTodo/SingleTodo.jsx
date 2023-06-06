import React from "react";
import Checkbox from "../Checkbox/Checkbox";

const SingleTodo = ({ todo,onUpdate }) => {
  /** Handler */
  const changeHandler =(e)=>{
    const updateTodo = {...todo,isCompleted:e.target.checked}
    onUpdate(updateTodo)
  }

  /** Render */
  return (
    <div className="bg-light-100 dark:bg-dark-200 flex items-center px-[24px] py-[18px] border-b dark:border-b-dark-600">
      <Checkbox id={todo?.id} isCompleted={todo?.isCompleted } onChange={changeHandler}/>
      <div
        type="text"
        className="w-full  outline-none text-lg font-normal bg-transparent text-light-500 dark:text-dark-300"
      >
        {todo?.isCompleted ? (
          <del className="text-light-300 dark:text-dark-500">{todo?.text}</del>
        ) : (
          todo?.text
        )}
      </div>
    </div>
  );
};

export default SingleTodo;
