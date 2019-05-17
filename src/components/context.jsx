import React, { useReducer } from "react";
import todoReducer from "./tasksReducer";
import toggleReducer from "./toggleReducer";
import editReducer from "./editReducer";

export const Context = React.createContext();

const todoList = [
  { id: 1, task: "test1", date: "05/22/2019", status: true },
  { id: 2, task: "test2", date: "05/22/2019", status: true },
  { id: 3, task: "test3", date: "05/22/2019", status: false },
  { id: 4, task: "test4", date: "05/22/2019", status: true },
  { id: 5, task: "test5", date: "05/22/2019", status: false }
];

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
