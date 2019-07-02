import React from "react";

function TodoForm({ formTitle, formValue, handleFormSubmit, updateField }) {
  return (
    <React.Fragment>
      <form className="form-inline" onSubmit={handleFormSubmit}>
        <div className="bd-highlight flex-grow-1">
          <input
            type="text"
            name={formTitle}
            style={{ width: "75%" }}
            placeholder="Add a task"
            onChange={e => updateField(e)}
            value={formValue}
            className="form-control"
          />
        </div>
        <div className="ml-auto bd-highlight align-self-start">
          <button
            type="submit"
            className="btn btn-info btn-sm mx-2"
            // disabled={`${form.task === "" ? "disabled" : ""}`}
          >
            <i className="fa fa-check" />
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default TodoForm;
