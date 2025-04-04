import { useEffect, useState } from 'react';
import { fetchRestaurants } from '../services/yelpService';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants('Los Angeles').then((data) => {
      if (data && data.businesses) {
        setRestaurants(data.businesses);
      }
    });
  }, []);

  return (
    <div>
      <h2>Top Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name} - {restaurant.rating} ⭐</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
