import React from "react";
import { Link } from "react-router-dom";

export const TopNavbar = props => {
  return (
    <div className="row m-2">
      <Link className="m-2" to="/">
        To-Do's
      </Link>
      <Link className="m-2" to="/add-new">
        Add New
      </Link>
      <Link className="m-2" to="/calender">
        Calendar
      </Link>
    </div>
  );
};
