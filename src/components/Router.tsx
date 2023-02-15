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
<<<<<<< HEAD
import Contact from './Contact';
import Register from "./Register";
import Details from "./Details";
=======


>>>>>>> 077de96283c91d59f6e5321dd18a581bcd8e18ab
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
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Details" element={<Details/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default Router;
