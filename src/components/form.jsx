import React, { useState, useContext, useEffect } from "react";
import Joi from "joi-browser";
import { Context } from "./context";

function TodoForm(props) {
  const { todos, dispatchTasks, editedTask, dispatchEdit } = useContext(
    Context
  );

  const [form, setValues] = useState({
    title: ""
  });

  const [errors, setErrors] = useState({
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
    validate(name, value);
  };

  const schema = {
    title: Joi.string().required()
  };

  const validate = (name, value) => {
    const tmpSchema = { [name]: schema[name] };
    const obj = { [name]: value };
    const { error } = Joi.validate(obj, tmpSchema);
    if (error) {
      setErrors({ ...errors, [name]: error.details[0].message });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (editedTask === "") {
      console.log("add");
      dispatchTasks({
        type: "ADD",
        title: form.title
      });
    } else {
      console.log("edit");

      dispatchTasks({
        type: "EDIT",
        id: editedTask,
        task: form.title
      });
      dispatchEdit({ type: "EDIT", id: "" });
    }
    setValues({ title: "" });
    setErrors({ title: "" });
  };

  return (
    <React.Fragment>
      <form className="form-inline" onSubmit={handleFormSubmit}>
        <div className="bd-highlight flex-grow-1">
          <input
            type="text"
            name="title"
            style={{ width: "80%" }}
            placeholder={props.placeHolder}
            onChange={updateField}
            value={form.title}
            className="form-control"
          />
          {errors.title ? (
            <label className="alert alert-danger" style={{ width: "80%" }}>
              {errors.title}
            </label>
          ) : null}
        </div>
        <div className="ml-auto bd-highlight">
          <button type="submit" className="btn btn-info btn-sm mx-2">
            <i className="fa fa-check" />
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default TodoForm;
