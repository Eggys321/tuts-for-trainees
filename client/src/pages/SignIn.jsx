import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
import toast from 'react-hot-toast';


const SignIn = () => {
  const { setLoggedIn } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  async function Signin(e) {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };

    try {
      const res = await fetch("http://localhost:4343/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginDetails),
      });
      const data = await res.json();
      console.log(data);
      if(data.token){
        localStorage.setItem('token', data.token)
        toast.success(data.msg)
        // navigate away
        navigate('/Home')
        setLoggedIn(true)
      }
      if(data.msg === "all fields are required to login" || data.errors.password === 'Email or password is incorrect'|| data.errors.email === "Not a regitered email"){
        toast.error(data.msg || data.errors.password || data.errors.email)
      }
      // const data = await axios.post('http://localhost:4343/api/login',loginDetails);
      // console.log(data);
      // if(data.token){
      //   localStorage.setItem('token', data.token)
      //   alert('logged in')
      //   // navigate away
      //   navigate('/')
      //   setLoggedIn(true)
      // }
    } catch (error) {
      // console.log(error.message);
      // alert(error.data.msg)
      // toast.error(error.data.msg)
      
    }
  }

  return (
    <div className="container">
      <h2 className="text-center mt-4"> sign in </h2>
      <form className="w-50 m-auto mt-5">
        <label htmlFor="email">Email:</label>
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-100 rounded-pill border border-2 border-success"
          type="email"
          name=""
          id="email"
        />

        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          className="w-100 rounded-pill border border-2 border-success"
          type="password"
          name=""
          id="password"
        />
        <br />
        <br />
        <input
          className="btn btn-primary"
          type="submit"
          value="Signin"
          onClick={Signin}
        />
      </form>
    </div>
  );
};

export default SignIn;
