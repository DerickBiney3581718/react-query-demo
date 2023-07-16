import { NavLink, Outlet } from "react-router-dom";

import React from 'react'

const Root = () => {
  return (
<div className="App">
<nav>
  <ul>
    <li>      <NavLink
      to="/"
      style={({ isActive, isPending }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isPending ? "red" : "black",
        };
      }}
    >
      Home
    </NavLink></li>

    <li>     <NavLink
      to="/super-heroes"
      style={({ isActive, isPending }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isPending ? "red" : "black",
        };
      }}
    >
      Traditional Super Heroes
    </NavLink></li>
    <li>
      <NavLink to='/rq-super-heroes' style={({ isActive, isPending }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isPending ? "red" : "black",
        };
      }}>RQ Super Heroes</NavLink>
    </li>
  </ul>
</nav>
<Outlet />
</div>  )
}

export default Root