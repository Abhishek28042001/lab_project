import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MapView from "./pages/MapViewPage";
import Planner from "./pages/Planner";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/planner" element={<Planner />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
