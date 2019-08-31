import React from "react";

function StatusNavbar({ handleSelectedItemClick, selectedItem }) {
  return (
    <>
      <ul className="nav navbar justify-content-center nav-tabs">
        <li
          name="ALL"
          className={`nav-link  ${selectedItem === "ALL" ? "active" : ""}`}
          onClick={e => handleSelectedItemClick(e.target.getAttribute("name"))}
        >
          All
        </li>
        <li
          name="COMPLETE"
          className={`nav-link ${selectedItem === "COMPLETE" ? "active" : ""}`}
          onClick={e => handleSelectedItemClick(e.target.getAttribute("name"))}
        >
          Completed
        </li>
        <li
          name="NOT_COMPLETE"
          className={`nav-link ${
            selectedItem === "NOT_COMPLETE" ? "active" : ""
          }`}
          onClick={e => handleSelectedItemClick(e.target.getAttribute("name"))}
        >
          Not completed
        </li>
      </ul>
    </>
  );
}

export default StatusNavbar;
