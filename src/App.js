import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./screens/Home";
import Count from "./screens/Count";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Count />} />
      </Routes>
    </div>
  );
}

export default App;
