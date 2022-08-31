//rfc
import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderHome(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        React hook
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="visually-hidden">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/todo">
              TodoList
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hooks
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/usestate">
                UseStateDemo
              </NavLink>
              <NavLink className="dropdown-item" to="/useeffect">
                UseEffect
              </NavLink>
              <NavLink className="dropdown-item" to="/usecallback">
                UseCallBack
              </NavLink>
              <NavLink className="dropdown-item" to="/usememo">
                UseMemo
              </NavLink>
              <NavLink className="dropdown-item" to="/useref">
                UseRef
              </NavLink>
              <NavLink className="dropdown-item" to="/useredux">
                Redux Number
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Redux hook
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/useredux">
                Redux Number
              </NavLink>
              <NavLink className="dropdown-item" to="/usereduxfaceapp">
                Redux Demo Face App
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
