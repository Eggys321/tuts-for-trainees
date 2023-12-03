import { createContext, useState, useEffect } from "react";

import axios from "axios";

const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [loggedIn,setLoggedIn] = useState(undefined)
  const token = localStorage.getItem('token')
  
  // let token_obj = JSON.parse(token);
  //console.log(token);
  async function getLoggedIn (){
    // const loggedInRes = await axios.get('http://localhost:4343/api/isLoggedIn', {
    //   headers: {
    //     'Authorization': token
    //   }
    // })
    const res = await fetch("http://localhost:4343/api/isLoggedIn", {
      method: "GET",
      headers: {
         Authorization: `Bearer ${token}`
      },
    });
    const data = await res.json();
    console.log(data);
    console.log();
    setLoggedIn(data)
    
  }

  const logout = ()=>{
    localStorage.removeItem('token')
    setLoggedIn(false)
  }


  useEffect(() => {
    getLoggedIn()
  },[]);

  
 

  return (
    <CartContext.Provider
      value={{
        
        loggedIn,
        getLoggedIn,
        logout,
        setLoggedIn

      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;