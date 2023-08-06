import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Comics from "./pages/Comics";
import Characters from "./pages/Characters";

import Header from "./components/Header";


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
    
         <Route path="/" element={<Characters />} />
   
        <Route path="/comics" element={<Comics />} />
       
      </Routes>
    </Router>
    </>
  );
}

export default App;
