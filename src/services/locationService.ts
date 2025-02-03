// services/locationService.ts

// Reverse geocoding function to convert latitude/longitude to a human-readable address
export const reverseGeocode = async (lat: number, lng: number): Promise<string> => {
  const apiKey = 'AIzaSyCUhx0gh8ZC9ADiVtTJO8ZQrILEh4e_xHoY'; // Replace with your Google Maps API key
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
  );
  const data = await response.json();

  if (data.status === 'OK' && data.results.length > 0) {
    return data.results[0].formatted_address;
  }

  throw new Error('Unable to reverse geocode location.');
};