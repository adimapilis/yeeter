import React from "react";
import Main  from "./pages/Main";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Main" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
