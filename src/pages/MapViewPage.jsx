import React, { useState, useCallback, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

// Map container style
const containerStyle = {
  width: '100%',
  height: '70vh',
  borderRadius: '0.375rem'
};

// Default center (Paris)
const defaultCenter = {
  lat: 48.8584,
  lng: 2.2945
};

// Hardcoded API key - make sure to replace with your actual key in a production environment
const GOOGLE_MAPS_API_KEY = "AIzaSyABRMx8ApHg9lEBO51RuXY9jATJh3PajTY";

export default function MapViewPage() {
  const [searchInput, setSearchInput] = useState("");
  const [savedLocations, setSavedLocations] = useState([
    { id: 1, name: "Eiffel Tower, Paris", coordinates: { lat: 48.8584, lng: 2.2945 } },
    { id: 2, name: "Colosseum, Rome", coordinates: { lat: 41.8902, lng: 12.4922 } },
  ]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [debugInfo, setDebugInfo] = useState("");

  // Load the Google Maps API
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY // Use the hardcoded key
  });

  useEffect(() => {
    // Debug logging
    console.log("Environment variable:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    console.log("Hardcoded key:", GOOGLE_MAPS_API_KEY);
    console.log("Is Google Maps loaded:", isLoaded);
    console.log("Google Maps load error:", loadError);

    if (loadError) {
      setDebugInfo(`Error loading map: ${loadError.message}`);
    } else if (isLoaded) {
      setDebugInfo("Map loaded successfully!");
    } else {
      setDebugInfo("Map is loading...");
    }
  }, [isLoaded, loadError]);

  const mapRef = useRef(null);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    setMap(map);
    console.log("Map loaded successfully!");
  }, []);

  const onUnmount = useCallback((map) => {
    mapRef.current = null;
    setMap(null);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchInput);
    // In a real implementation, you would use the Geocoding API:
    // https://developers.google.com/maps/documentation/geocoding/overview

    if (searchInput.trim()) {
      // For demonstration, adding dummy location
      const newLocation = {
        id: savedLocations.length + 1,
        name: searchInput,
        coordinates: { lat: 40.7128, lng: -74.006 }, // Dummy coordinates for NYC
      };
      setSavedLocations([...savedLocations, newLocation]);
      setSearchInput("");
      selectLocation(newLocation);
    }
  };

  const selectLocation = (location) => {
    setSelectedLocation(location);
    setActiveMarker(location.id);

    // Center the map on the selected location
    if (mapRef.current) {
      mapRef.current.panTo(location.coordinates);
      mapRef.current.setZoom(14);
    }
  };

  const handleMarkerClick = (id) => {
    setActiveMarker(id);
    const location = savedLocations.find(loc => loc.id === id);
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
              {debugInfo && (
                <div className="bg-blue-100 p-2 text-blue-700 text-sm">
                  Debug: {debugInfo}
                </div>
              )}

              {loadError && (
                <div className="bg-red-100 p-4 rounded-md text-red-700">
                  Error loading Google Maps API: {loadError.message}
                </div>
              )}

              {!isLoaded && (
                <div className="bg-gray-200 rounded-md h-[70vh] flex items-center justify-center">
                  <p className="text-gray-600">Loading maps...</p>
                </div>
              )}

              {isLoaded && (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={selectedLocation ? selectedLocation.coordinates : defaultCenter}
                  zoom={selectedLocation ? 14 : 10}
                  onLoad={onMapLoad}
                  onUnmount={onUnmount}
                  options={{
                    streetViewControl: true,
                    mapTypeControl: true,
                    fullscreenControl: true,
                  }}
                >
                  {savedLocations.map(location => (
                    <Marker
                      key={location.id}
                      position={location.coordinates}
                      onClick={() => handleMarkerClick(location.id)}
                    >
                      {activeMarker === location.id && (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                          <div>
                            <h3 className="font-medium">{location.name}</h3>
                            <p className="text-sm text-gray-600">
                              Lat: {location.coordinates.lat.toFixed(4)}, Lng: {location.coordinates.lng.toFixed(4)}
                            </p>
                          </div>
                        </InfoWindow>
                      )}
                    </Marker>
                  ))}
                </GoogleMap>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}