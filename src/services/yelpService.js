const YELP_API_KEY = 'YOUR_YELP_API_KEY';
const BASE_URL = 'https://api.yelp.com/v3/businesses/search';

export const fetchRestaurants = async (location = 'New York') => {
  try {
    const response = await fetch(`${BASE_URL}?location=${location}&limit=5`, {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Failed to fetch Yelp data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching Yelp data:', error);
    return null;
  }
};
