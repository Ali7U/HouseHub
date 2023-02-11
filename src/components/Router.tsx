import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import LandingPage from "./LandingPage";
import Listings from "./Listings";
import Nav from "./Nav";

function Router() {
  return (
    <div className="routers">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Browse" element={<Listings />} />
        <Route path="/LandingPage" element={<LandingPage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default Router;
