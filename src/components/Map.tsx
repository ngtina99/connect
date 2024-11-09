import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import '../styles/Map.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoibmd0aW5hMDUyNiIsImEiOiJjbTNhaWFyZzcxN3FxMnJzZTJzeDNheGk0In0.o6DonEDJxZ-zV1oIrukuoA';

const Map = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.006, 40.7128], // Coordinates for New York City
      zoom: 10
    });
    mapRef.current = map;

    map.on('click', (e) => {
      const { lng, lat } = e.lngLat;

      // Create a DOM element for the marker
      const markerElement = document.createElement('div');
      markerElement.className = 'marker';
      markerElement.style.backgroundImage = 'url(https://icons.veryicon.com/png/o/miscellaneous/logo-design-of-lingzhuyun/icon-correct-24-1.png)'; // Replace with your online image URL
      markerElement.style.width = '30px';
      markerElement.style.height = '30px';
      markerElement.style.backgroundSize = '100%';

      // Add marker to the map
      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([lng, lat])
        .addTo(map);

      // Save marker reference
      markersRef.current.push(marker);
    });

    return () => {
      // Clean up markers
      markersRef.current.forEach(marker => marker.remove());
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} className="map-container"></div>;
};

export default Map;
