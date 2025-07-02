// Root component – defines routes
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecommendationPage from "./pages/RecommendationPage";
import ItineraryPage from "./pages/ItineraryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recommendations" element={<RecommendationPage />} />
      <Route path="/itinerary" element={<ItineraryPage />} />
      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
