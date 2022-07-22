import * as React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/List/List";
import Hotel from "./pages/home/hotel/Hotel";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/id" element={<Hotel />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
