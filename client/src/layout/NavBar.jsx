import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CartContext from "../context/CartContext";

const NavBar = () => {
  const {loggedIn,logout} = useContext(CartContext)
  // const [loggedIn] = useState(!true)
  console.log(loggedIn);
  function handleLogout(){

  }
  return (
    <div className="container  ">
      <nav className="d-flex  justify-content-between align-items-center">
        <h2>Navbar logo</h2>
        <ul className="d-flex gap-5 align-items-center justify-content-center list-unstyled mt-4">
          <li className="">
            <Link className="text-decoration-none" to="/">stories</Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/About">contact</Link>
          </li>
          {loggedIn ? <div><p>create a story</p> <button onClick={logout}>logout</button>   </div>: <>
          
          <li>
            <Link className="text-decoration-none" to="/SignIn">SignIn</Link>
          </li>
          <li>
            <Link className="btn btn-primary text-decoration-none" to="/SignUp">Get Started</Link>
          </li>
          </>}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
