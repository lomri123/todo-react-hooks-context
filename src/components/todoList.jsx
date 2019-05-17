import React from "react";
import TodoForm from "./form";

function TodoList({
  todoListProps,
  handleDelete,
  changeStatus,
  isEditing,
  handleEdit
}) {
  if (todoListProps.length)
    return (
      <ul className="list-group">
        {todoListProps.map(todo =>
          todo.id !== isEditing ? (
            <li
              className={`list-group-item  ${
                todo.status ? "checked-list" : ""
              }`}
              key={todo.id}
            >
              <input
                type="checkbox"
                onClick={() => changeStatus(todo)}
                className="m-2"
                defaultChecked={todo.status ? "checked" : ""}
              />
              {todo.task}
              {todo.date}
              <button
                className="float-right btn btn-info btn-sm m-2"
                onClick={() => handleEdit(todo.id)}
              >
                Edit
              </button>
              <button
                className="float-right btn btn-info btn-sm m-2 "
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          ) : (
            <li className="list-group-item row" key={todo.id}>
              <TodoForm />
            </li>
          )
        )}
        {isEditing ? null : <TodoForm />}
      </ul>
    );
  return null;
}

export default TodoList;
