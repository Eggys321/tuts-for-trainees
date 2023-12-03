import React, { useEffect, useState } from 'react';
import displayPic from '../assets/my pic.jpg'
// import { set } from 'mongoose';

const Home = () => {
    const [data,setData]= useState([])
    const [error,setError] = useState(false)
    const getData = async()=>{
        try {
            
            const fetcher = await fetch('http://localhost:4343/api/all');
            const res = await fetcher.json();
            console.log(res.allPosts);
            setData(res.allPosts)
        } catch (error) {
            if(error){
                setError(error.msg)
                console.log(error);
            }
            
        }

    }

    useEffect(()=>{
        getData()

    },[])
  return (
    <div className='container my-5'>
        <h2> data </h2>
        <div className='row justify-content-between align-items-center gap-5  '>
{error && error.msg}
        {data.length < 1 ? <p>no data....</p> :data.map((datum)=>{
            const {title,_id,description,tags} = datum
            return(
                <div key={_id} className='border col-md-5 p-3'>
                    <img src={displayPic} alt="" className='img-fluid'/>
                    <h2><span className='text-success fw-bold'>title:</span> {title} </h2>
                    <h4><span>story:</span> {description} </h4>
                    <h2> {tags} </h2>
                    <p>created by: {datum.createdBy.name} </p>
                </div>
            )
        })}
        </div>

    </div>
  )
}

export default Home