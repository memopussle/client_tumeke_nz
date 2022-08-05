import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./Search";
import LandingPage from "./LandingPage/LandingPage";
import About from "./About/About";
import EachTour from "./EachTour/EachTour";


const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/tours/:id" element={<EachTour />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
