import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const Planner = () => {
  // State for destinations and itinerary
  const [searchInput, setSearchInput] = useState("");
  const [destinations, setDestinations] = useState([
    { id: 1, name: "Eiffel Tower", location: "Paris, France", type: "Attraction", rating: 4.7, coordinates: { lat: 48.8584, lng: 2.2945 } },
    { id: 2, name: "Louvre Museum", location: "Paris, France", type: "Museum", rating: 4.8, coordinates: { lat: 48.8606, lng: 2.3376 } },
    { id: 3, name: "Notre-Dame Cathedral", location: "Paris, France", type: "Church", rating: 4.6, coordinates: { lat: 48.8530, lng: 2.3499 } },
  ]);
  const [itinerary, setItinerary] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Filters
  const [filters, setFilters] = useState({
    type: "all",
    budget: "all",
    distance: "all"
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchInput);
    // Normally you would fetch data from an API here
  };

  const addToItinerary = (destination) => {
    if (!itinerary.some(item => item.id === destination.id)) {
      setItinerary([...itinerary, destination]);
    }
  };

  const removeFromItinerary = (id) => {
    setItinerary(itinerary.filter(item => item.id !== id));
  };

  const moveItem = (index, direction) => {
    const newItinerary = [...itinerary];
    if (direction === "up" && index > 0) {
      [newItinerary[index], newItinerary[index - 1]] = [newItinerary[index - 1], newItinerary[index]];
    } else if (direction === "down" && index < itinerary.length - 1) {
      [newItinerary[index], newItinerary[index + 1]] = [newItinerary[index + 1], newItinerary[index]];
    }
    setItinerary(newItinerary);
  };

  const exportItinerary = () => {
    console.log("Exporting itinerary:", itinerary);
    // Export functionality would go here
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row h-[calc(100vh-64px)]">
        {/* Left Side - Interactive Map */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-white p-4 overflow-y-auto">
          <div className="bg-gray-200 rounded-lg mb-4 p-4 h-64 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
              <p className="text-gray-600 text-sm">
                Google Maps would be integrated here to search and select destinations.
              </p>
            </div>
          </div>



          {/* Search Results */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Search Results</h3>
            {destinations.map(destination => (
              <div
                key={destination.id}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${selectedDestination?.id === destination.id ? 'bg-blue-50 border-blue-300' : 'bg-white hover:bg-gray-50'
                  }`}
                onClick={() => setSelectedDestination(destination)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{destination.name}</h4>
                    <p className="text-sm text-gray-600">{destination.location}</p>
                    <p className="text-sm text-gray-500">{destination.type} • Rating: {destination.rating}</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToItinerary(destination);
                    }}
                    className="mt-1"
                  >
                    Add
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Editable Itinerary List */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-100 p-4 overflow-y-auto">

          {/* Search Destinations */}
          <Card className="mb-4">
            <CardHeader className="pb-3">
              <CardTitle>Search Destinations</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="Search for destinations, attractions, etc."
                    className="w-full p-2 border rounded-md"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Search
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Filter Options */}
          <Card className="mb-4">
            <CardHeader className="pb-3">
              <CardTitle>Filter Options</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Flex container for row layout */}
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium mb-1">Activity Type</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={filters.type}
                    onChange={(e) => handleFilterChange("type", e.target.value)}
                  >
                    <option value="all">All Types</option>
                    <option value="attraction">Attractions</option>
                    <option value="restaurant">Restaurants</option>
                    <option value="hotel">Hotels</option>
                    <option value="museum">Museums</option>
                    <option value="park">Parks</option>
                  </select>
                </div>

                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium mb-1">Budget</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={filters.budget}
                    onChange={(e) => handleFilterChange("budget", e.target.value)}
                  >
                    <option value="all">All Budgets</option>
                    <option value="budget">Budget-Friendly</option>
                    <option value="mid">Mid-Range</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>

                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium mb-1">Distance</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={filters.distance}
                    onChange={(e) => handleFilterChange("distance", e.target.value)}
                  >
                    <option value="all">Any Distance</option>
                    <option value="1">Within 1 km</option>
                    <option value="5">Within 5 km</option>
                    <option value="10">Within 10 km</option>
                    <option value="20">Within 20 km</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>


          <Card className="mb-4">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>Your Itinerary</CardTitle>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setItinerary([])}
                    className="text-xs"
                  >
                    Clear All
                  </Button>
                  <Button
                    size="sm"
                    onClick={exportItinerary}
                    className="bg-blue-600 hover:bg-blue-700 text-xs"
                  >
                    Export PDF
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {itinerary.length > 0 ? (
                <div className="space-y-3">
                  {itinerary.map((item, index) => (
                    <div key={item.id} className="p-3 bg-white rounded-lg border">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.location}</p>
                        </div>
                        <div className="flex items-start space-x-1">
                          <button
                            onClick={() => moveItem(index, "up")}
                            className="p-1 text-gray-500 hover:text-blue-600 disabled:opacity-30"
                            disabled={index === 0}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                          </button>
                          <button
                            onClick={() => moveItem(index, "down")}
                            className="p-1 text-gray-500 hover:text-blue-600 disabled:opacity-30"
                            disabled={index === itinerary.length - 1}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </button>
                          <button
                            onClick={() => removeFromItinerary(item.id)}
                            className="p-1 text-gray-500 hover:text-red-600"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-gray-500">
                  <p>Your itinerary is empty. Add destinations from the map or search results.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {itinerary.length > 0 && (
            <Card className="mb-4">
              <CardHeader className="pb-3">
                <CardTitle>Itinerary Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center px-3 py-2 bg-gray-50 rounded-md">
                    <span className="font-medium">Total Destinations:</span>
                    <span>{itinerary.length}</span>
                  </div>
                  <div className="flex justify-between items-center px-3 py-2 bg-gray-50 rounded-md">
                    <span className="font-medium">Estimated Time:</span>
                    <span>{itinerary.length * 2} hours</span>
                  </div>
                  <div className="flex justify-between items-center px-3 py-2 bg-gray-50 rounded-md">
                    <span className="font-medium">Total Distance:</span>
                    <span>~{Math.floor(Math.random() * 20) + 5} km</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedDestination && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Destination Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">{selectedDestination.name}</h3>
                  <p className="text-gray-600">{selectedDestination.location}</p>
                  <div className="bg-gray-200 h-40 rounded-md flex items-center justify-center">
                    <p className="text-gray-600 text-sm">Destination image would appear here</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                    Sed euismod, eros vel bibendum lacinia, nisi nunc aliquam nunc, vitae aliquam
                    nunc nisi vel nunc.
                  </p>
                  <div className="flex justify-between items-center pt-2">
                    <Button
                      variant="outline"
                      className="w-1/2 mr-2"
                      onClick={() => window.location.href = `/destination/${selectedDestination.id}`}
                    >
                      View Details
                    </Button>
                    <Button
                      className="w-1/2 ml-2 bg-blue-600 hover:bg-blue-700"
                      onClick={() => addToItinerary(selectedDestination)}
                    >
                      Add to Itinerary
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Planner;