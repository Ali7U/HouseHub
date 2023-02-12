import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";
import Login from "./Login";
import Register from "../Register";
import { Box } from "@chakra-ui/react";

function Router() {
  return (
    <div className="routers">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
      <Footer />
      
    </div>
  );
}

export default Router;
