/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Vidly</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <NavLink className="nav-link" to="/movies">Movies</NavLink>
        <NavLink className="nav-link" to="/customers">Customers</NavLink>
        <NavLink className="nav-link " to="/rentel">Rentel</NavLink>
        <NavLink className="nav-link " to="/login">Sign In</NavLink>
      </div>
    </nav>

  );
}

export default Navbar;




















// import React from "react";

// export const Navbar = ({ totalCounters }) => {
//   return (
//     <nav class="navbar navbar-light bg-light">
//       <a class="navbar-brand" href="#">
//         Navbar.
//         <span className="badge badge-pill badge-info">
//           {totalCounters}
//         </span>
//       </a>
//     </nav>
//   );
// }