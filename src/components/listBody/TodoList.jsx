import React, { useState } from "react";
import NewTodoForm from "../forms/NewTodoForm";
import SingleTodo from "./SingleTodo";

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
        <NewTodoForm
          formValue={form.addTask}
          formTitle="add"
          updateField={updateField}
          handleFormSubmit={handleFormSubmit}
        />
      </li>
      {todoListProps.map(todo =>
        todo._id !== form.id ? (
          <SingleTodo
            key={todo._id}
            status={todo.status}
            changeStatus={changeStatus}
            todo={todo}
            task={todo.task}
            handleEditClick={handleEditClick}
            id={todo._id}
            handleDelete={handleDelete}
          />
        ) : (
          <li className="list-group-item" key={todo._id}>
            <NewTodoForm
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
