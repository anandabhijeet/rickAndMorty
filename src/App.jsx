import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import FavouritePage from "./page/FavouritePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/favourite" element={<FavouritePage/>} />
        <Route path="*" element={<HomePage/>}/>

        
      </Routes>
    </Router>

  )
};

export default App;
