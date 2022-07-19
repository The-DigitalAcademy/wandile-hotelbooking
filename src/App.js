import * as React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import './App.css';
import List from "./pages/List/List";
import Hotel from "./pages/home/hotel/Hotel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/id" element={<Hotel />} /> 
      </Routes>
    </div>
  );
}

export default App;
