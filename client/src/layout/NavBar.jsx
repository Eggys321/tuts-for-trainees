import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import dp from '../assets/my pic.jpg'


const NavBar = () => {
    const navigate = useNavigate()

  // const {loggedIn,logout} = useContext(CartContext)
  const {loggedIn,setLoggedIn} = useContext(CartContext)
  // const [loggedIn] = useState(!true)
  console.log(loggedIn);
  function handleLogout(){

  }
  
  const logout = ()=>{
    localStorage.removeItem('token')
    setLoggedIn(false)
    navigate('/')
    
    
  }
  return (
    <div className="container  ">
      <nav className="d-flex  justify-content-between align-items-center">
        <h2>Logo</h2>
        <ul className="d-flex gap-5 align-items-center justify-content-end align-items-center list-unstyled mt-4">
          <li className="">
            <Link className="text-decoration-none" to="/">stories</Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/About">contact</Link>
          </li>
          {loggedIn ? <div className="d-flex w-25 gap-5"> <button onClick={logout}>logout</button>  <div> <Link to='/Home'> <img src={dp} alt="" className="w-50 rounded-pill "/> </Link> </div> </div>: <>
          
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
