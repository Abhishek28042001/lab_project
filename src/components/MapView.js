import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = { width: "100%", height: "100vh" };
const center = { lat: 40.7128, lng: -74.006 };

export default function MapView({ locations }) {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        {locations.map((place, index) => (
          <Marker key={index} position={place} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
