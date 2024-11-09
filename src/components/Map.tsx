import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import '../styles/Map.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoibmd0aW5hMDUyNiIsImEiOiJjbTNhaWFyZzcxN3FxMnJzZTJzeDNheGk0In0.o6DonEDJxZ-zV1oIrukuoA';

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.006, 40.7128], // Coordinates for New York City
      zoom: 10
    });

    map.on('load', () => {
      map.addSource('regions', {
        type: 'geojson',
        data: 'path_to_your_geojson_file'
      });

      map.addLayer({
        id: 'regions-layer',
        type: 'fill',
        source: 'regions',
        paint: {
          'fill-color': '#888888',
          'fill-opacity': 0.4
        }
      });

      // Change color on click
      map.on('click', 'regions-layer', (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['regions-layer']
        });

        if (features.length) {
          const feature = features[0];
          map.setFeatureState(
            {
              source: 'regions',
              id: feature.id
            },
            {
              color: '#ff0000' // New color
            }
          );
        }
      });

      map.on('mousemove', 'regions-layer', (e) => {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'regions-layer', () => {
        map.getCanvas().style.cursor = '';
      });
    });

    return () => map.remove();
  }, []);

  return <div id="map" className="map-container"></div>;
};

export default Map;
