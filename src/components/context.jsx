import React, { useReducer } from "react";
import todoReducer from "./tasksReducer";
import toggleReducer from "./toggleReducer";
import editReducer from "./editReducer";

export const Context = React.createContext();

const todoList = [];

const completionStatus = "all";

const editedTaskId = "";

function Provider(props) {
  const [todos, dispatchTasks] = useReducer(todoReducer, todoList);
  const [completion, dispatchToggle] = useReducer(
    toggleReducer,
    completionStatus
  );
  const [editedTask, dispatchEdit] = useReducer(editReducer, editedTaskId);

  return (
    <Context.Provider
      value={{
        todos,
        dispatchTasks,
        completion,
        dispatchToggle,
        editedTask,
        dispatchEdit
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
