import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function MapViewPage() {
  const [searchInput, setSearchInput] = useState("");
  const [savedLocations, setSavedLocations] = useState([
    { id: 1, name: "Eiffel Tower, Paris", coordinates: { lat: 48.8584, lng: 2.2945 } },
    { id: 2, name: "Colosseum, Rome", coordinates: { lat: 41.8902, lng: 12.4922 } },
  ]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchInput);
    // Normally you would make an API call to a geocoding service
    // But for demonstration, let's just add a dummy location
    if (searchInput.trim()) {
      const newLocation = {
        id: savedLocations.length + 1,
        name: searchInput,
        coordinates: { lat: 40.7128, lng: -74.006 }, // Dummy coordinates for NYC
      };
      setSavedLocations([...savedLocations, newLocation]);
      setSearchInput("");
      setSelectedLocation(newLocation);
    }
  };

  const selectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left sidebar */}
        <div className="md:col-span-1 space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-700">Search Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Search for a destination..."
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-700">Saved Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {savedLocations.map((location) => (
                  <div
                    key={location.id}
                    className={`p-3 rounded-md cursor-pointer transition-colors ${
                      selectedLocation && selectedLocation.id === location.id
                        ? "bg-blue-100 border border-blue-300"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => selectLocation(location)}
                  >
                    <p className="font-medium">{location.name}</p>
                    <p className="text-sm text-gray-500">
                      Lat: {location.coordinates.lat.toFixed(4)}, Lng: {location.coordinates.lng.toFixed(4)}
                    </p>
                  </div>
                ))}
                {savedLocations.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No saved locations yet.</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map area */}
        <div className="md:col-span-2">
          <Card className="shadow-md h-full">
            <CardContent className="p-0">
              <div className="bg-gray-200 rounded-md h-[70vh] flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Interactive Map</h3>
                  <p className="text-gray-600 mb-4">
                    {selectedLocation ? (
                      <>
                        Viewing: <span className="font-semibold">{selectedLocation.name}</span>
                        <br />
                        <span className="text-sm">
                          Coordinates: {selectedLocation.coordinates.lat.toFixed(4)}, {selectedLocation.coordinates.lng.toFixed(4)}
                        </span>
                      </>
                    ) : (
                      "Select a location from the list or search for a new one."
                    )}
                  </p>
                  <p className="text-sm text-gray-500">
                    This is a placeholder for the Google Maps component.
                    <br />
                    In a real application, you would integrate with Google Maps API here.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}