import React from "react";

function TodoNavbar({ handleSelectedItemClick, selectedItem }) {
  return (
    <>
      <ul className="nav justify-content-center nav-tabs">
        <li
          name="all"
          className={`nav-link  ${"all" === selectedItem ? "active" : ""}`}
          onClick={e => handleSelectedItemClick(e.target.getAttribute("name"))}
        >
          All
        </li>
        <li
          name="completed"
          className={`nav-link ${"completed" === selectedItem ? "active" : ""}`}
          onClick={e => handleSelectedItemClick(e.target.getAttribute("name"))}
        >
          Completed
        </li>
        <li
          name="not-completed"
          className={`nav-link ${
            "not-completed" === selectedItem ? "active" : ""
          }`}
          onClick={e => handleSelectedItemClick(e.target.getAttribute("name"))}
        >
          Not completed
        </li>
      </ul>
    </>
  );
}

export default TodoNavbar;
