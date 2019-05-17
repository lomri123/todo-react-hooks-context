import React, { useContext } from "react";
import { Context } from "./context";
import TodoList from "./todoList";
import TodoNavbar from "./todoNavbar";
import { filteredTodoList } from "../utils";

function TodoListContainer(props) {
  const {
    todos,
    dispatchTasks,
    completion,
    dispatchToggle,
    editedTask,
    dispatchEdit
  } = useContext(Context);

  let results = filteredTodoList(todos, completion);

  const changeStatus = e => {
    dispatchTasks({
      type: "TOGGLE",
      id: e.id
    });
  };

  const handleSelectedItemClick = e => {
    dispatchToggle({
      type: e
    });
  };

  const handleDelete = e => {
    dispatchTasks({
      type: "DELETE",
      id: e
    });
  };

  const handleEdit = e => {
    dispatchEdit({
      type: "EDIT",
      id: e
    });
  };

  return (
    <>
      <TodoNavbar
        selectedItem={completion}
        handleSelectedItemClick={handleSelectedItemClick}
      />
      <TodoList
        todoListProps={results}
        changeStatus={changeStatus}
        handleDelete={handleDelete}
        isEditing={editedTask}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default TodoListContainer;
