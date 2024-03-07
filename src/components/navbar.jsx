/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export  const Navbar = ({totalCounters}) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar  . 
        <span className="badge badge-pill badge-info">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
}

 