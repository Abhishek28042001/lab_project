import { useState } from 'react';
import DestinationWeather from '../components/DestinationWeather';

const Destination = () => {
  const [destination, setDestination] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedCity(destination);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan Your Trip</h2>

      <form className="w-full max-w-md" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter destination city"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
        <button
          type="submit"
          className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Check Weather
        </button>
      </form>

      {selectedCity && <DestinationWeather city={selectedCity} />}
    </div>
  );
};

export default Destination;
