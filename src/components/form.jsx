import React, { useState, useContext, useEffect } from "react";
import Joi from "joi-browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "./context";
import moment from "moment";

function TodoForm() {
  const { todos, dispatchTasks, editedTask, dispatchEdit } = useContext(
    Context
  );

  const [form, setValues] = useState({
    title: ""
  });

  const [date, setDate] = useState();

  const [errors, setErrors] = useState({
    title: ""
  });

  useEffect(() => {
    if (editedTask !== "") {
      let index = todos.findIndex(i => i.id === editedTask);
      let tmpDate = new Date(todos[index].date);
      setValues({ title: todos[index].task });
      setDate(tmpDate);
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

  const updateDate = e => {
    setDate(e);
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
    let tmpDate = moment(date).format("MM/DD/YYYY");
    // let newDate = new Date(tmpDate);

    if (editedTask === "") {
      console.log("add");
      dispatchTasks({
        type: "ADD",
        title: form.title,
        date: tmpDate
      });
    } else {
      console.log("edit");

      dispatchTasks({
        type: "EDIT",
        id: editedTask,
        task: form.title,
        date: tmpDate
      });
      dispatchEdit({ type: "EDIT", id: "" });
    }
    setValues({ title: "" });
    setDate();
    setErrors({ title: "" });
  };

  return (
    <React.Fragment>
      <form className="col-8 mx-auto" onSubmit={handleFormSubmit}>
        <div className="form-group row">
          <input
            type="text"
            name="title"
            onChange={updateField}
            value={form.title}
            className="form-control"
          />
          {errors.title ? (
            <label className="alert alert-danger">{errors.title}</label>
          ) : null}
          <DatePicker
            selected={date}
            name="date"
            onChange={updateDate}
            placeholderText="Due date"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default TodoForm;
