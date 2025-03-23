import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Planner() {
  const [trip, setTrip] = useState({
    title: "My European Adventure",
    startDate: "2025-05-01",
    endDate: "2025-05-14",
    destinations: [
      { id: 1, name: "Paris, France", days: 3 },
      { id: 2, name: "Rome, Italy", days: 4 },
    ],
  });

  const [itinerary, setItinerary] = useState([
    {
      id: 1,
      day: 1,
      date: "2025-05-01",
      location: "Paris, France",
      activities: [
        { id: 1, time: "09:00", description: "Visit Eiffel Tower" },
        { id: 2, time: "13:00", description: "Lunch at Le Jules Verne" },
        { id: 3, time: "15:00", description: "Louvre Museum" },
      ],
    },
    {
      id: 2,
      day: 2,
      date: "2025-05-02",
      location: "Paris, France",
      activities: [
        { id: 4, time: "10:00", description: "Notre Dame Cathedral" },
        { id: 5, time: "14:00", description: "Seine River Cruise" },
      ],
    },
  ]);

  const [newActivity, setNewActivity] = useState({
    day: 1,
    time: "",
    description: "",
  });

  const [newDestination, setNewDestination] = useState({
    name: "",
    days: 1,
  });

  const addActivity = (e) => {
    e.preventDefault();
    if (newActivity.time && newActivity.description) {
      const dayIndex = itinerary.findIndex((day) => day.day === parseInt(newActivity.day));
      if (dayIndex !== -1) {
        const updatedItinerary = [...itinerary];
        const newId = Math.max(0, ...updatedItinerary[dayIndex].activities.map((a) => a.id)) + 1;
        updatedItinerary[dayIndex].activities.push({
          id: newId,
          time: newActivity.time,
          description: newActivity.description,
        });
        updatedItinerary[dayIndex].activities.sort((a, b) => a.time.localeCompare(b.time));
        setItinerary(updatedItinerary);
        setNewActivity({ ...newActivity, time: "", description: "" });
      }
    }
  };

  const addDestination = (e) => {
    e.preventDefault();
    if (newDestination.name && newDestination.days > 0) {
      const newId = Math.max(0, ...trip.destinations.map((d) => d.id)) + 1;
      setTrip({
        ...trip,
        destinations: [
          ...trip.destinations,
          { id: newId, name: newDestination.name, days: parseInt(newDestination.days) },
        ],
      });

      // Create empty days in the itinerary for the new destination
      const lastDay = itinerary.length > 0 ? itinerary[itinerary.length - 1] : { day: 0, date: trip.startDate };
      const newDays = [];

      for (let i = 1; i <= newDestination.days; i++) {
        const newDay = {
          id: itinerary.length + i,
          day: lastDay.day + i,
          date: new Date(lastDay.date),
          location: newDestination.name,
          activities: [],
        };
        // Increment the date
        newDay.date.setDate(newDay.date.getDate() + i);
        newDay.date = newDay.date.toISOString().split('T')[0];
        newDays.push(newDay);
      }

      setItinerary([...itinerary, ...newDays]);
      setNewDestination({ name: "", days: 1 });
    }
  };

  const removeActivity = (dayId, activityId) => {
    const dayIndex = itinerary.findIndex((day) => day.id === dayId);
    if (dayIndex !== -1) {
      const updatedItinerary = [...itinerary];
      updatedItinerary[dayIndex].activities = updatedItinerary[dayIndex].activities.filter(
        (activity) => activity.id !== activityId
      );
      setItinerary(updatedItinerary);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trip Details and Destinations */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-700">Trip Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Trip Title</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    value={trip.title}
                    onChange={(e) => setTrip({ ...trip, title: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Start Date</label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded-md"
                      value={trip.startDate}
                      onChange={(e) => setTrip({ ...trip, startDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">End Date</label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded-md"
                      value={trip.endDate}
                      onChange={(e) => setTrip({ ...trip, endDate: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-700">Destinations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {trip.destinations.map((destination) => (
                  <div key={destination.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <div>
                      <p className="font-medium">{destination.name}</p>
                      <p className="text-sm text-gray-500">{destination.days} days</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        // You could add edit functionality here
                        console.log("Edit destination:", destination);
                      }}
                      className="text-xs"
                    >
                      Edit
                    </Button>
                  </div>
                ))}
              </div>

              <form onSubmit={addDestination} className="mt-4 pt-4 border-t">
                <h3 className="font-medium mb-2">Add New Destination</h3>
                <div className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Destination name"
                      className="w-full p-2 border rounded-md"
                      value={newDestination.name}
                      onChange={(e) => setNewDestination({ ...newDestination, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      min="1"
                      placeholder="Number of days"
                      className="w-full p-2 border rounded-md"
                      value={newDestination.days}
                      onChange={(e) => setNewDestination({ ...newDestination, days: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Add Destination
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Itinerary */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-semibold text-blue-700">Daily Itinerary</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  // Export functionality would go here
                  console.log("Export itinerary");
                }}
              >
                Export Itinerary
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {itinerary.map((day) => (
                  <div key={day.id} className="border rounded-lg overflow-hidden">
                    <div className="bg-blue-50 p-3 border-b">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">
                          Day {day.day} - {day.location}
                        </h3>
                        <span className="text-sm text-gray-500">{day.date}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      {day.activities.length > 0 ? (
                        <div className="space-y-3">
                          {day.activities.map((activity) => (
                            <div key={activity.id} className="flex items-start">
                              <div className="w-20 font-medium text-blue-600">{activity.time}</div>
                              <div className="flex-grow">
                                <p>{activity.description}</p>
                              </div>
                              <button
                                onClick={() => removeActivity(day.id, activity.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-center py-6">No activities planned for this day.</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-700">Add Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={addActivity} className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Day</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={newActivity.day}
                      onChange={(e) => setNewActivity({ ...newActivity, day: e.target.value })}
                      required
                    >
                      {itinerary.map((day) => (
                        <option key={day.id} value={day.day}>
                          Day {day.day} - {day.location}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Time</label>
                    <input
                      type="time"
                      className="w-full p-2 border rounded-md"
                      value={newActivity.time}
                      onChange={(e) => setNewActivity({ ...newActivity, time: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-span-3 md:col-span-1">
                    <label className="block text-sm font-medium mb-1">Activity</label>
                    <input
                      type="text"
                      placeholder="Description"
                      className="w-full p-2 border rounded-md"
                      value={newActivity.description}
                      onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Add Activity
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}