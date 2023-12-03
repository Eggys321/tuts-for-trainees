import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import NavBar from "./layout/NavBar";
import { Toaster } from 'react-hot-toast';
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
      {/* method 1 */}
      {/* <BrowserRouter>

        <Routes>
          <Route path="/"  element={ <><NavBar/> <Home/>  </> }/>
          <Route path="/About" element={ <><NavBar/>  <About/> </> }/>
          <Route path="/Test" element={<Test/>}/>

        </Routes>

      </BrowserRouter> */}

      {/* method 2 */}
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar/>}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Route>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster />

    </>
  );
}

export default App;
