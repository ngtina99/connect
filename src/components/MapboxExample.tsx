import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useStateTogether } from 'react-together';
import '../styles/MapboxExample.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoibmd0aW5hMDUyNiIsImEiOiJjbTNhaWFyZzcxN3FxMnJzZTJzeDNheGk0In0.o6DonEDJxZ-zV1oIrukuoA';

const MapboxExample = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [pinnedObjects, setPinnedObjects] = useStateTogether('pinnedObjects', []);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-65.017, -16.457],
      zoom: 5
    });

    const geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            message: 'Foo',
            imageId: 1011,
            iconSize: [60, 60]
          },
          geometry: {
            type: 'Point',
            coordinates: [-66.324462, -16.024695]
          }
        },
        {
          type: 'Feature',
          properties: {
            message: 'Bar',
            imageId: 870,
            iconSize: [50, 50]
          },
          geometry: {
            type: 'Point',
            coordinates: [-61.21582, -15.971891]
          }
        },
        {
          type: 'Feature',
          properties: {
            message: 'Baz',
            imageId: 837,
            iconSize: [40, 40]
          },
          geometry: {
            type: 'Point',
            coordinates: [-63.292236, -18.281518]
          }
        }
      ]
    };

    for (const marker of geojson.features) {
      const el = document.createElement('div');
      const width = marker.properties.iconSize[0];
      const height = marker.properties.iconSize[1];
      el.className = 'marker';
      el.style.backgroundImage = `url(https://picsum.photos/id/${marker.properties.imageId}/${width}/${height})`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = '100%';
      el.style.display = 'block';
      el.style.border = 'none';
      el.style.borderRadius = '50%';
      el.style.cursor = 'pointer';
      el.style.padding = 0;

      el.addEventListener('click', () => {
        window.alert(marker.properties.message);
      });

      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mapRef.current);
    }

    mapRef.current.on('click', (e) => {
      const { lng, lat } = e.lngLat;

      setPinnedObjects((prev) => [
        ...prev,
        { id: Date.now(), lng, lat }
      ]);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [setPinnedObjects]);

  useEffect(() => {
    if (mapRef.current) {
      // Clear existing markers to prevent duplicates
      const existingMarkers = document.getElementsByClassName('marker');
      while (existingMarkers.length > 0) {
        existingMarkers[0].parentNode.removeChild(existingMarkers[0]);
      }

      pinnedObjects.forEach((obj) => {
        // Create a DOM element for the marker
        const markerElement = document.createElement('div');
        markerElement.className = 'marker';
        markerElement.style.backgroundImage = 'url(https://avatars.githubusercontent.com/u/147401933?v=4)'; // Replace with your online image URL
        markerElement.style.width = '30px';
        markerElement.style.height = '30px';
        markerElement.style.backgroundSize = '100%';

        // Add marker to the map
        new mapboxgl.Marker(markerElement)
          .setLngLat([obj.lng, obj.lat])
          .addTo(mapRef.current);
      });
    }
  }, [pinnedObjects]);

  return <div ref={mapContainerRef} id="map" style={{ height: '100vh', width: '100vw' }} />;
};

export default MapboxExample;

