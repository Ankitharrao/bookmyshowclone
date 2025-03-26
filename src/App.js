import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import BookingPage from "./pages/BookingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingPage />} /> {/* Booking Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;