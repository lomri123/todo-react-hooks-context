import React, { useState } from "react";
import TodoForm from "./form";

function TodoList({
  todoListProps,
  handleDelete,
  changeStatus,
  formSubmitProps
}) {
  const [form, updateForm] = useState({
    id: "",
    addTask: "",
    editTask: ""
  });

  const handleEditClick = todo => {
    updateForm({
      ...form,
      id: todo._id,
      editTask: todo.task
    });
  };

  const updateField = e => {
    let { name, value } = e.target;
    updateForm({
      ...form,
      [`${name}Task`]: value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    formSubmitProps(form.id, form.addTask, form.editTask);
    updateForm({
      id: "",
      addTask: "",
      editTask: ""
    });
  };

  return (
    <ul className="list-group">
      <li className={`list-group-item ${form.id !== "" ? "disabled" : ""}`}>
        <TodoForm
          formValue={form.addTask}
          formTitle="add"
          updateField={updateField}
          handleFormSubmit={handleFormSubmit}
        />
      </li>
      {todoListProps.map(todo =>
        todo._id !== form.id ? (
          <li
            className={`list-group-item todo-list ${
              todo.status ? "checked-list" : ""
            }`}
            key={todo._id}
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
              <div className="bd-highlight flex-grow-1 break-words-lines mt-1">
                {todo.task}
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
                  onClick={() => handleDelete(todo._id)}
                >
                  <i className="fa fa-trash" />
                </button>
              </div>
            </div>
          </li>
        ) : (
          <li className="list-group-item" key={todo._id}>
            <TodoForm
              formValue={form.editTask}
              formTitle="edit"
              updateField={updateField}
              handleFormSubmit={handleFormSubmit}
            />
          </li>
        )
      )}
    </ul>
  );
}

export default TodoList;
