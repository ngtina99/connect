import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import '../styles/Map.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoibmd0aW5hMDUyNiIsImEiOiJjbTNhaWFyZzcxN3FxMnJzZTJzeDNheGk0In0.o6DonEDJxZ-zV1oIrukuoA';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-9.139, 38.7223], // Coordinates for Lisbon, Portugal
      zoom: 10
    });

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
      new mapboxgl.Marker(markerElement)
        .setLngLat([lat, lng])
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} className="map-container"></div>;
};

export default Map;
