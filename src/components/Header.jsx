import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Travel Planner</Link>

          <nav className="flex gap-4 items-center">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/map" className="hover:text-blue-200 transition-colors">Map View</Link>
            <Link to="/planner" className="hover:text-blue-200 transition-colors">Planner</Link>
            <Link to="/login">
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-100">Login</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;