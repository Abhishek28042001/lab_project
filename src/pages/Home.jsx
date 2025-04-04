import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Here you would typically redirect to planner with the search query
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Plan Your Dream Journey With Ease
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl">
              Discover new destinations, create detailed itineraries, and make your travel dreams a reality.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="w-full max-w-2xl mb-8">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="flex-grow py-3 px-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium md:w-auto"
                >
                  Search Destinations
                </Button>
              </div>
            </form>

            <Link to="/planner">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg py-6 px-10">
                Start Planning
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your perfect journey in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Search Destinations</h3>
              <p className="text-gray-600 mb-4">
                Explore thousands of destinations and find the perfect spots for your next adventure.
              </p>
              <div className="text-blue-600 font-medium">Step 1</div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Create Your Itinerary</h3>
              <p className="text-gray-600 mb-4">
                Build a personalized day-by-day plan with activities, accommodations, and transportation.
              </p>
              <div className="text-blue-600 font-medium">Step 2</div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Save & Share</h3>
              <p className="text-gray-600 mb-4">
                Export your plans as PDF, save them to your account, or share with travel companions.
              </p>
              <div className="text-blue-600 font-medium">Step 3</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover trending locations loved by travelers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Destination Cards */}
            {[
              {
                name: "Paris, France",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
                description: "Explore the city of lights with its iconic Eiffel Tower and charming streets."
              },
              {
                name: "Kyoto, Japan",
                image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                description: "Discover ancient temples, traditional gardens, and authentic Japanese culture."
              },
              {
                name: "Santorini, Greece",
                image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                description: "Experience breathtaking sunsets over the blue domes of this beautiful Greek island."
              },
            ].map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Link to="/planner" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Plan your trip →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/planner">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-action */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Next Adventure?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of satisfied travelers who've created unforgettable journeys with our planner.
          </p>
          <Link to="/planner">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100 text-lg py-6 px-10">
              Start Planning Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}