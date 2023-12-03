import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';



const SignUp = () => {
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [password,setpassword] = useState('')
  const navigate = useNavigate()

 async function Register(e){
  e.preventDefault()
  // console.log(12);
  try {
    const regData = {
      email,
      name,
      password,
    }

  //   const res = await fetch('http://localhost:7878/auth/register',{method:"POST",
  //   headers:{
  //     "Content-type":"application/json"
  //   },
  //   body:JSON.stringify(regData)
  // })
  // const data = await res.json();
  // console.log(data);
    // if(   !email ||
    //   !firstname ||
    //   !lastname ||
    //   !password ||
    //   !passwordVerify ){
    //     alert('please fill all fields')

    // }
    // if(  email ||
    //   firstname ||
    //   lastname ||
    //   password ||
    //   passwordVerify ){
    //     alert('registeration completed')

    // }

  //  const {data} =  await axios.post('http://localhost:4343/api/register',regData)
  // console.log(data);
  // console.log(data);
  //  if(data.token){
  //   alert('registration completed')
  //   navigate('/SignIn')
  // }
  const res = await fetch('http://localhost:4343/api/register', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(regData),
      });
      const data = await res.json();
      console.log(data);
      if(data.msg === 'registration successful'){
        toast.success(data.msg)

        navigate('/SignIn')
      }
      if(data.msg === 'all fields are required to register' || data.errors.password === 'password min length must be 8'|| data.errors.email === "Please provide a valid email" || data.errors.email === "Email address already in use"){
        toast.error(data.msg || data.errors.password || data.errors.email)
      }
   // if(res.token) // localstrogare,setitem(;token, t) navigate 
  //  if(password.length < 6){
  //   // alert(errMsg)
  //   console.log(response.data.errMsg);
  //  }
  //  if(   !email ||
  //   !firstname ||
  //   !lastname ||
  //   !password ||
  //   !passwordVerify ){
  //     // alert(errMsg)
  //     console.log(response.data.errMsg);

  // }
  } catch (errors) {
    if(errors){
      // alert(errors.errors)
      return
    }
    console.log(errors);
    
  }
  

  }



  return (
    <div className="container mt-5">
      <h2 className="text-center">Register</h2>
      <form className="w-50 m-auto" >
        <label htmlFor="name">Name:</label><br />
        <input onChange={(e)=> setName(e.target.value)}  value={name} className="w-100 rounded-pill border border-2 border-success"  type="text" name="" id="firstname" /><br /><br />
        <label htmlFor="email">Email:</label><br />
        <input onChange={(e)=> setEmail(e.target.value) } value={email} className="w-100 rounded-pill border border-2 border-success" type="email" name="" id="email" /><br /><br />
        <label htmlFor="name">Password:</label><br />
        <input onChange={(e)=> setpassword(e.target.value) }  value={password} className="w-100 rounded-pill border border-2 border-success"  type="password" name="" id="password" /><br /><br />
      <br /><br />
        <input className="btn btn-primary" type="submit" value="Register" onClick={Register}/>
      </form>

    </div>
  );
};

export default SignUp;