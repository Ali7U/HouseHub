import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import LandingPage from "./LandingPage";
import Listings from "./Listings";
import Nav from "./Nav";
import Login from "./Login";

import Register from "./Register";
import { Box } from "@chakra-ui/react";
import Contact from "./Contact";
import Contact from './Contact';

function Router() {
  return (
    <div className="routers">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} /> 
        <Route path="/Register" element={<Register />} />
         <Route path="/Browse" element={<Listings />} />
        <Route path="/main" element={<Main/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Router;
