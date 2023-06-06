import React from "react";
import SingleTodo from "../SingleTodo/SingleTodo";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FilterLink from "../FilterLink/FilterLink";

const TodoList = ({ todos, onSetTodo,onFilter }) => {
  /** Handlers */
  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;
    var updatedList = [...todos];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    onSetTodo(updatedList);
  };

  const updateHandler = (todo) => {
    let list = [...todos];
    const index = list.findIndex((single) => single.id === todo.id);
    list[index] = todo;
    onSetTodo(list);
  };

  const clearCompletedHandler = () => {
    let list = [...todos];
    const newList = list.filter((single) => !single.isCompleted);
    onSetTodo(newList);
  };

  /** Render */
  return (
    <div className="rounded-lg overflow-hidden mt-5">
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="drag-container">
          {(provided) => (
            <div
              className="drag-container`"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos?.length > 0 &&
                todos?.map((item, index) => (
                  <Draggable
                    key={item?.id}
                    draggableId={item?.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="drag-container`"
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <SingleTodo todo={item} onUpdate={updateHandler} />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="bg-light-100 dark:bg-dark-200 flex items-center px-[24px] py-[18px] border-b dark:border-b-dark-600 justify-between">
        <div className="text-[13px] text-light-400 dark:text-dark-400">
          {todos?.length} items left
        </div>
        <ul className="sm:flex items-center gap-4 hidden">
        <FilterLink onFilter={onFilter} />
        </ul>
        <button
          onClick={clearCompletedHandler}
          className="text-[13px] text-light-400  dark:text-dark-400"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
