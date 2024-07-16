import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar"; // Adjust path as necessary
import Cards from "./components/cards/cards";
import Footer from "./components/footer/footer";
import GenreList from "./components/generes/generation"; // Adjust path as necessary

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Cards />} />
        <Route path="/gameHub" element={<Cards />} />
        <Route path="/generation" element={<GenreList />} />
        <Route path="/about" element={<Footer />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
