import React, { useState, useContext, useEffect } from "react";
import { Context } from "./context";

function TodoForm(props) {
  const { todos, dispatchTasks, editedTask, dispatchEdit } = useContext(
    Context
  );

  const [form, setValues] = useState({
    title: ""
  });

  useEffect(() => {
    if (editedTask !== "") {
      let index = todos.findIndex(i => i.id === editedTask);
      setValues({ title: todos[index].task });
    }
  }, []);

  const updateField = e => {
    let { value } = e.target;
    let name = e.target.name;

    setValues({
      ...form,
      [name]: value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (editedTask === "") {
      dispatchTasks({
        type: "ADD",
        title: form.title
      });
    } else {
      dispatchTasks({
        type: "EDIT",
        id: editedTask,
        task: form.title
      });
      dispatchEdit({ type: "EDIT", id: "" });
    }
    setValues({ title: "" });
  };

  return (
    <React.Fragment>
      <form className="form-inline" onSubmit={handleFormSubmit}>
        <div className="bd-highlight flex-grow-1">
          <input
            type="text"
            name="title"
            style={{ width: "75%" }}
            placeholder={props.placeHolder}
            onChange={updateField}
            value={form.title}
            className="form-control"
          />
        </div>
        <div className="ml-auto bd-highlight align-self-start">
          <button
            type="submit"
            className="btn btn-info btn-sm mx-2"
            disabled={`${form.title === "" ? "disabled" : ""}`}
          >
            <i className="fa fa-check" />
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default TodoForm;
