import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Cookies from "js-cookie";

import Header from "./components/Header";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Header />} />
        <Route path="/" element={<Header />} /> */}
         <Route path="/" element={<Characters />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        {/* <Route path="/characterld/:name" element={<Characterld />} /> */}
        {/* <Route path="/characterld/:id" element={<Characteld />} /> */}
        {/* <Route path="/comic/:id" element={<Comic />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
