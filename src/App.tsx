import Nav from "./Components/Nav/Nav";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Unique from "./Pages/Unique/Unique";
import FilterGenre from "./Pages/FilterGenre/FilterGenre";

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Unique />} />
        
        <Route path="/genre/:id" element={<FilterGenre />} />

      </Routes>
    </div>
  );
}

export default App;
