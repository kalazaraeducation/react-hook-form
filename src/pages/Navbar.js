import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-yellow-500 w-100 p-5">
      <ul className="flex justify-center items-center gap-x-10">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/validation-schema">V-Schema</NavLink>
        </li>
        <li>
          <NavLink to="/controller">Controller</NavLink>
        </li>
        <li>
          <NavLink to="/form-state">Form State</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
