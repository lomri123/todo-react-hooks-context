import React from "react";

function SingleTodo({
  status,
  changeStatus,
  todo,
  task,
  handleEditClick,
  handleDelete,
  id
}) {
  return (
    <li className={`list-group-item todo-list ${status ? "checked-list" : ""}`}>
      <div className="d-flex bd-highlight">
        <div className="bd-highlight">
          <input
            type="checkbox"
            onClick={() => changeStatus(todo)}
            className="position-static m-2 "
            defaultChecked={status ? "checked" : ""}
          />
        </div>
        <div className="bd-highlight flex-grow-1 break-words-lines mt-1">
          {task}
        </div>
        <div className="ml-auto bd-highlight ">
          <button
            className="btn btn-info btn-sm mx-2"
            onClick={() => handleEditClick(todo)}
          >
            <i className="fa fa-pencil" />
          </button>
          <button
            className="btn btn-info btn-sm mx-2 "
            onClick={() => handleDelete(id)}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </div>
    </li>
  );
}

export default SingleTodo;
