import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ FIXED: make sure Route is imported
import HousesSlider from "./components/HousesSlider";
import RealtorProfile from "./components/RealtorProfile";
import RealtorDashboard from "./components/RealtorDashboard";



function App() {
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HousesSlider />} />
        <Route path="/realtor/:id" element={<RealtorProfile />} />
        <Route path="/realtor-dashboard" element={<RealtorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
