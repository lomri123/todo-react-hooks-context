import React, { useReducer } from "react";
import todoReducer from "./tasksReducer";
import toggleReducer from "./toggleReducer";
export const Context = React.createContext();

const todoList = [];

const completionStatus = "all";

function Provider(props) {
  const [todos, dispatchTasks] = useReducer(todoReducer, todoList);
  const [completion, dispatchToggle] = useReducer(
    toggleReducer,
    completionStatus
  );

  return (
    <Context.Provider
      value={{
        todos,
        dispatchTasks,
        completion,
        dispatchToggle
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
