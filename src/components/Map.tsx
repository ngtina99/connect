import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import '../styles/Map.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoibmd0aW5hMDUyNiIsImEiOiJjbTNhaWFyZzcxN3FxMnJzZTJzeDNheGk0In0.o6DonEDJxZ-zV1oIrukuoA';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/ngtina0526/cm3ap2ssc00o601o0a70nbh80',
      center: [-9.139, 38.7223], // Coordinates for Lisbon, Portugal
      zoom: 10
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} className="map-container"></div>;
};

export default Map;
