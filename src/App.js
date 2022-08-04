import React from 'react';
import { Routes, Route } from "react-router-dom";
import Search from "./Search";
import LandingPage from "./LandingPage/LandingPage";
import About from "./About/About";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import EachTour from './EachTour/EachTour';


const App = () => {
  
const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>

          <Route path="/tours/:id" element={<EachTour />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App