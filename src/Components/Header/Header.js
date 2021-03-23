import React, { Component } from "react";
//Thẻ thay thế thẻ a trong routing của react-route-dom
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">
            CYBERSOFT
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item ">
                <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="nav-link" to="/home">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="nav-link" to="/lifecycle">
                  Lifecycle
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" 
                  className="nav-link dropdown-toggle"
                  to="/register"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Register
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="dropdown-item" to="/register">
                    Form
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a  
                  className="nav-link dropdown-toggle"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hooks
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="dropdown-item" to="/usestatedemo">
                    usestatedemo
                  </NavLink>
                  <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="dropdown-item" to="/useffecthome">
                    useEffectHome
                  </NavLink>
                  <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="dropdown-item" to="/reduxhookhome">
                    reduxhookhome
                  </NavLink>
                  <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="dropdown-item" to="/baitapchonxe">
                    BaiTapChonXe
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="nav-link" to="/details">
                  Details
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="nav-link" to="/hookusecallback">
                  hookUseCallBack
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="nav-link" to="/hookusememo">
                  hookUseMemo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="nav-link" to="/hookuseref">
                  hookUseRef
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle"
                  to="/usestatedemo"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  HOC
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink activeStyle={{fontWeight:'bold'}} activeClassName="bg-white text-dark" className="dropdown-item" to="/demoprops">
                    ParentComponent
                  </NavLink>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-danger my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
