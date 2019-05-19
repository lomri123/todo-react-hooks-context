import React from "react";
import TodoForm from "./form";

function TodoList({
  todoListProps,
  handleDelete,
  changeStatus,
  isEditing,
  handleEdit
}) {
  return (
    <ul className="list-group">
      <li className={`list-group-item ${isEditing ? "disabled" : ""}`}>
        <TodoForm placeHolder="Add new task" />
      </li>
      {todoListProps.sort().map(todo =>
        todo.id !== isEditing ? (
          <li
            className={`list-group-item todo-list ${
              todo.status ? "checked-list" : ""
            }`}
            key={todo.id}
          >
            <div className="d-flex bd-highlight">
              <div className="bd-highlight">
                <input
                  type="checkbox"
                  onClick={() => changeStatus(todo)}
                  className="position-static m-2 "
                  defaultChecked={todo.status ? "checked" : ""}
                />
              </div>
              <div className="bd-highlight flex-grow-1">{todo.task}</div>
              <div className="ml-auto  bd-highlight">
                <button
                  className="btn btn-info btn-sm mx-2"
                  onClick={() => handleEdit(todo.id)}
                >
                  <i className="fa fa-pencil" />
                </button>
                <button
                  className="btn btn-info btn-sm mx-2 "
                  onClick={() => handleDelete(todo.id)}
                >
                  <i className=" fa fa-trash" />
                </button>
              </div>
            </div>
          </li>
        ) : (
          <li className="list-group-item" key={todo.id}>
            <TodoForm />
          </li>
        )
      )}
    </ul>
  );
}

export default TodoList;
