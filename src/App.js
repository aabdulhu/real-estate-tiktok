import React, { useEffect } from "react";
import HousesSlider from "./components/HousesSlider";

function App() {
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <div>
      <HousesSlider />
    </div>
  );
}

export default App;
