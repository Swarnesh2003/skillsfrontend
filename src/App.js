import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home.js";
import Recruiter from "./components/recruiter.js";
import Candidate from "./components/candidate.js";
function App(){
    

    return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/candidate" element={<Candidate />} />
      </Routes>
    </Router>
);
}
export default App;
