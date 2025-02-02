// src/App.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import AvatarOutfitSelection from "./components/AvatarOutfitSelection";
import LatestTrends from "./components/LatestTrends";
import ContactInfo from "./components/ContactInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* ✅ Navbar for Navigation */}
      <Navbar />

      {/* ✅ Home Section */}
      <div className="home">
        <h2>Welcome to Fashion Muse</h2>
        <p>
          Explore AI-powered fashion, customize your avatar, and get personalized styling advice.
        </p>
        <div className="button-section">
          <Link to="/avatar">
            <button className="home-button">Setup Your Avatar</button>
          </Link>
          <Link to="/trends">
            <button className="home-button">Explore Trends</button>
          </Link>
        </div>
      </div>

      {/* ✅ Routes for Different Sections */}
      <Routes>
        <Route path="/avatar" element={<AvatarOutfitSelection />} />
        <Route path="/trends" element={<LatestTrends />} />
        <Route path="/contact" element={<ContactInfo />} />
        <Route path="*" element={<h1>Welcome to Fashion Muse</h1>} />
      </Routes>
    </div>
  );
}

export default App;
