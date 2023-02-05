import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Home from "./container/home/Home";
import About from "./component/about/About";
import Register from "./container/register/Register";
import Verify from "./container/verify/Verify";
import Wrapper from "./container/wrapper/Wrapper";
import ColorSelection from "./container/color_selection/ColorSelection";
import SelectPage from "./container/selection_page/SelectPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/verify" element={<Verify />} />
        <Route exact path="/wrapper" element={<Wrapper />} />
        <Route exact path="/color_selection" element={<ColorSelection />} />
        <Route exact path="/selection-page" element={<SelectPage />} />
      </Routes>
    </Router>
  );
};

export default App;
