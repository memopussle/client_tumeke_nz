import React from "react";
import { Routes, Route } from "react-router-dom";

import { Search, LandingPage, About, EachTour, Services, AddTour} from "./Link";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/tours/:id" element={<EachTour />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Services />} />
        <Route path="/addtour" element={<AddTour />} />
      </Routes>
    </>
  );
};

export default App;
