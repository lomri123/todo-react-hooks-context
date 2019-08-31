import React, { useReducer } from "react";
import todoReducer from "./reducers/TasksReducer";
import ToggleStatusReducer from "./reducers/ToggleStatusReducer";
export const Context = React.createContext();

const todoList = [];

const completionStatus = "ALL";

function Provider(props) {
  const [todos, dispatchTasks] = useReducer(todoReducer, todoList);
  const [completion, dispatchToggle] = useReducer(
    ToggleStatusReducer,
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
