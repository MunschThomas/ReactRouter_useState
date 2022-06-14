import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Count from "./screens/Count";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Count />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
