import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

function Router() {
  return (
    <div>
      <Nav />
      <Routes>{/* <Route path="/" element={<Nav />} /> */}</Routes>
      <Footer/>
    </div>
  );
}

export default Router;
