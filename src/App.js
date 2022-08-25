import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";

import { Search, LandingPage, About, EachTour, Services, AddTour} from "./Link";



const App = () => {
  const [currentId, setCurrentId] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/tours/:id" element={<EachTour />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Services currentId={currentId} setCurrentId={setCurrentId} />} />
        <Route path="/addtour" element={<AddTour currentId={currentId} setCurrentId={setCurrentId} />} />
      </Routes>
    </>
  );
};

export default App;
