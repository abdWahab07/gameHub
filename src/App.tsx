import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Cards from "./components/cards/cards";
import Footer from "./components/footer/footer";
import GenreList from "./components/generes/generation"; 
import GameDetail from "./components/games/gamesDescription/gamesDescription";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/gameHub" element={<Cards />} />
        <Route path="/generation" element={<GenreList />} />
        <Route path="/about-us" element={<Footer/>} />
        <Route path="/game/:id" element={<GameDetail />} /> {/* Add this route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
