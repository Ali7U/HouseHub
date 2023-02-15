import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import LandingPage from "./LandingPage";
import Listings from "./Listings";
import Nav from "./Nav";
import Login from "./Login";
import { Box } from "@chakra-ui/react";
import Main from "./Main";
import Contact from './Contact';
import GenerateImage from "./GenerateImage";
import Profile from "./Profile";
import Register from "./Register";
import Details from "./Details";


function Router() {
  return (
    <div className="routers">
       

      
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />

         <Route path="/login" element={<Login />} /> 
        <Route path="/Register" element={<Register />} />
         <Route path="/Browse" element={<Listings />} />
        <Route path="/main" element={<Main/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/GenerateImage" element={<GenerateImage/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/Details" element={<Details/>} />




      </Routes><Footer/>
    </div>
  );
}

export default Router;
