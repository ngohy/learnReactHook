//rfc
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ACCESS_TOKEN, clearCookie, clearLocalStorage, USER_LOGIN } from "../../util/config";

export default function HeaderHome(props) {

  const { userLogin } = useSelector(state => state.userReducer);

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
            <NavLink className="nav-link" to="/home">
              Home <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          {userLogin !== null ?
            <>
              <li className="nav-item active">
                <NavLink className="nav-link " to="/profile">
                  HeLLo ! {userLogin.email}
                </NavLink>
              </li>
              <li className="nav-item">
                <span className="nav-link"
                 style={{ cursor: 'pointer' }}
                  onClick={() => {
                    clearLocalStorage(USER_LOGIN)
                    clearLocalStorage(ACCESS_TOKEN)
                    clearCookie(USER_LOGIN);
                    //reload lai trang
                    window.location.reload();
                  }}>Dang xuat</span>
              </li>
            </>
            : <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          }
          <li className="nav-item">
            <NavLink className="nav-link" to="/todo">
              TodoList
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/demohoc">
              HOC
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
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Custom hook
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/customhook">
                use Cookie
              </NavLink>
              <NavLink className="dropdown-item" to="/demoanimation">
                animation
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
