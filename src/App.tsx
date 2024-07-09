import Nav from "./Components/Nav/Nav";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
