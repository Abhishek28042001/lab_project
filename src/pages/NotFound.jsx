import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto text-blue-500"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>

        <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>

        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for seems to have wandered off on its own adventure.
          Let's get you back on track!
        </p>

        <div className="space-y-4">
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700 w-full">
              Return to Home
            </Button>
          </Link>

          <Link to="/planner">
            <Button variant="outline" className="w-full">
              Plan a Trip
            </Button>
          </Link>

          <Link to="/dashboard" className="text-blue-600 hover:underline block mt-4">
            Go to Dashboard
          </Link>
        </div>

        <div className="mt-12 border-t pt-6 text-gray-500 text-sm">
          <p>
            Need help? <Link to="/help" className="text-blue-600 hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;