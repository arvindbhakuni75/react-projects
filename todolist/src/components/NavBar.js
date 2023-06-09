import React from 'react'

import { NavLink, useLocation } from 'react-router-dom'

function NavBar() {

  const location = useLocation();
  // console.log(location)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">TodoList</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/inputform">InputForm</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/hiby">HiBye</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dropdown">DropDown</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/listrendring">ListRendring</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/memohook">MemoHook</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/userefhook">RefHook</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/form">Form</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reducer">ReducerCounter</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/effectvsmemo">EffectVsMemo</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/task">Task</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/imgapi">ApiImage</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/material">materialUI</NavLink>
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
