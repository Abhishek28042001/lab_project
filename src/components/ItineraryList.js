import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function ItineraryList({ itinerary, addDestination }) {
  return (
    <div className="w-1/2 p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Your Itinerary</h2>
      {itinerary.map((place, index) => (
        <Card key={index} className="mb-2">
          <CardContent>{place.name}</CardContent>
        </Card>
      ))}
      <Button onClick={() => addDestination("New Destination")}>Add Destination</Button>
    </div>
  );
}
