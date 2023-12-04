import React, { useEffect, useState } from 'react';
import scrabblePic from '../assets/unsplash_Z2bJeJQRbW0.jpg'
import { Link, Outlet } from "react-router-dom";

const Home = () => {

    const [user,setUser] = useState(null)
    const token = localStorage.getItem('token')


    let getUser = async () => {
        let response = await fetch('http://localhost:4343/api/user', {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
    
        // if (response.status === 401) {
        //   navigate("/login");
        //   toast.error(`Something went wrong, Please login again`, {
        //     position: "top-right",
        //   });
        //   return;
        // }
    
        let data = await response.json();
        setUser(data.name);
        console.log(data.name);
      };
      useEffect(()=>{
        getUser()
      },[])
  return (
    <main className='container'>
      <div className='row justify-content-between align-items-center my-5'>
        <div className='col-lg-4' >

        <h1> Welcome <span className='fw-bold text-success'>{user}</span> </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet voluptatum maxime quos ipsam voluptatibus minima delectus quae hic distinctio!</p>
       <div className=' d-flex gap-5'>
       <Link className='text-decoration-none btn btn-primary'>
        My stories
        </Link>
        <Link to='/CreateStory' className='text-decoration-none btn btn-primary'>
        Create story
        </Link>
       </div>
        </div>
        <div className='col-lg-6 '>
        <img src={scrabblePic} alt="" className='img-fluid' />

        </div>
      </div>
    </main>
  )
}

export default Home