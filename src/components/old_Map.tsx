import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Replace this with your actual Google Maps API key
const API_KEY = 'AIzaSyBlMTTQfeJLZr9iS8_kEdBdUoOgZOO4IyI';

// Define the map container style
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

// Define the default center of the map
const center = {
  lat: 37.7749,  // Example: San Francisco latitude
  lng: -122.4194, // Example: San Francisco longitude
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        {/* Marker Example */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
