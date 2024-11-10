import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useStateTogether } from 'react-together';
import { useMood } from '@hooks/Mood/MoodContext';
import './MapboxExample.scss';
import sadFace from '@assets/images/sad.png';
import neutralFace from '@assets/images/neutral.png';
import happyFace from '@assets/images/happy.png';

mapboxgl.accessToken = 'pk.eyJ1Ijoibmd0aW5hMDUyNiIsImEiOiJjbTNhaWFyZzcxN3FxMnJzZTJzeDNheGk0In0.o6DonEDJxZ-zV1oIrukuoA';

const MapboxExample = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [pinnedObjects, setPinnedObjects] = useStateTogether('pinnedObjects', []);
  const { mood } = useMood(); // Use the mood context

  useEffect(() => {
    // Initialize the map, starting from the USA (e.g., New York)
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/ngtina0526/cm3axp61u01lj01o02g6ydirr',
      center: [-74.0060, 40.7128], // New York coordinates
      zoom: 0 // Initial zoom level for the USA view
    });

    // Add markers for the geojson data
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

    // Add event listener for clicking on the map
    mapRef.current.on('click', (e) => {
      const { lng, lat } = e.lngLat;

      setPinnedObjects((prev) => [
        ...prev,
        { id: Date.now(), lng, lat, mood } // Include the user's mood
      ]);
    });

    // Delay the zoom-in animation by 2 seconds
    setTimeout(() => {
      if (mapRef.current) {
        // Zoom to Lisbon after 2 seconds
        mapRef.current.easeTo({
          center: [-7.0000, 38.7688],  // Lisbon coordinates
          zoom: 8,                    // Desired zoom level for Lisbon
          duration: 4000,             // Animation duration (4 seconds)
          curve: 1                    // Smooth transition curve
        });
      }
    }, 1700);  // 2 seconds delay

    return () => {
      mapRef.current.remove();
    };
  }, [setPinnedObjects, mood]);

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

        // Use the mood to determine marker style or image
        if (obj.mood < 33) {
          markerElement.style.backgroundImage = `url(${sadFace})`; // Use sad image
        } else if (obj.mood < 67) {
          markerElement.style.backgroundImage = `url(${neutralFace})`; // Use neutral image
        } else {
          markerElement.style.backgroundImage = `url(${happyFace})`; // Use happy image
        }

        markerElement.style.width = '30px';
        markerElement.style.height = '30px';
        markerElement.style.backgroundSize = '100%';
        markerElement.style.backgroundRepeat = 'no-repeat';
        markerElement.style.borderRadius = '50%';
        markerElement.style.display = 'block';

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


// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import { useStateTogether } from 'react-together';
// import { useMood } from '@hooks/Mood/MoodContext';
// import './MapboxExample.scss';

// mapboxgl.accessToken = 'pk.eyJ1Ijoibmd0aW5hMDUyNiIsImEiOiJjbTNhaWFyZzcxN3FxMnJzZTJzeDNheGk0In0.o6DonEDJxZ-zV1oIrukuoA';

// const MapboxExample = () => {
//   const mapContainerRef = useRef(null);
//   const mapRef = useRef(null);
//   const [pinnedObjects, setPinnedObjects] = useStateTogether('pinnedObjects', []);
//   const { mood } = useMood(); // Use the mood context

//   useEffect(() => {
//     // Initialize the map, starting from the USA (e.g., New York)
//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/ngtina0526/cm3axp61u01lj01o02g6ydirr',
//       center: [-74.0060, 40.7128], // New York coordinates
//       zoom: 0 // Initial zoom level for the USA view
//     });

//     // Add markers for the geojson data
//     const geojson = {
//       type: 'FeatureCollection',
//       features: [
//         {
//           type: 'Feature',
//           properties: {
//             message: 'Foo',
//             imageId: 1011,
//             iconSize: [60, 60]
//           },
//           geometry: {
//             type: 'Point',
//             coordinates: [-66.324462, -16.024695]
//           }
//         },
//         {
//           type: 'Feature',
//           properties: {
//             message: 'Bar',
//             imageId: 870,
//             iconSize: [50, 50]
//           },
//           geometry: {
//             type: 'Point',
//             coordinates: [-61.21582, -15.971891]
//           }
//         },
//         {
//           type: 'Feature',
//           properties: {
//             message: 'Baz',
//             imageId: 837,
//             iconSize: [40, 40]
//           },
//           geometry: {
//             type: 'Point',
//             coordinates: [-63.292236, -18.281518]
//           }
//         }
//       ]
//     };

//     for (const marker of geojson.features) {
//       const el = document.createElement('div');
//       const width = marker.properties.iconSize[0];
//       const height = marker.properties.iconSize[1];
//       el.className = 'marker';
//       el.style.backgroundImage = `url(https://picsum.photos/id/${marker.properties.imageId}/${width}/${height})`;
//       el.style.width = `${width}px`;
//       el.style.height = `${height}px`;
//       el.style.backgroundSize = '100%';
//       el.style.display = 'block';
//       el.style.border = 'none';
//       el.style.borderRadius = '50%';
//       el.style.cursor = 'pointer';
//       el.style.padding = 0;

//       el.addEventListener('click', () => {
//         window.alert(marker.properties.message);
//       });

//       new mapboxgl.Marker(el)
//         .setLngLat(marker.geometry.coordinates)
//         .addTo(mapRef.current);
//     }

//     // Add event listener for clicking on the map
//     mapRef.current.on('click', (e) => {
//       const { lng, lat } = e.lngLat;

//       setPinnedObjects((prev) => [
//         ...prev,
//         { id: Date.now(), lng, lat }
//       ]);
//     });

//     // Delay the zoom-in animation by 30 seconds
//     setTimeout(() => {
//       if (mapRef.current) {
//         // Zoom to Lisbon after 30 seconds
//         mapRef.current.easeTo({
//           center: [0.0000, 38.7688],  // Lisbon coordinates
//           zoom: 6,                    // Desired zoom level for Lisbon
//           duration: 4000,              // Animation duration (5 seconds)
//           curve: 1                     // Smooth transition curve
//         });
//       }
//     }, 2000);  // 30 seconds delay

//     return () => {
//       mapRef.current.remove();
//     };
//   }, [setPinnedObjects]);

//   useEffect(() => {
//     if (mapRef.current) {
//       // Clear existing markers to prevent duplicates
//       const existingMarkers = document.getElementsByClassName('marker');
//       while (existingMarkers.length > 0) {
//         existingMarkers[0].parentNode.removeChild(existingMarkers[0]);
//       }

//       pinnedObjects.forEach((obj) => {
//         // Create a DOM element for the marker
//         const markerElement = document.createElement('div');
//         markerElement.className = 'marker';
//         markerElement.style.backgroundImage = 'url(https://avatars.githubusercontent.com/u/147401933?v=4)';
//         markerElement.style.width = '30px';
//         markerElement.style.height = '30px';
//         markerElement.style.backgroundSize = '100%';

//         // Add marker to the map
//         new mapboxgl.Marker(markerElement)
//           .setLngLat([obj.lng, obj.lat])
//           .addTo(mapRef.current);
//       });
//     }
//   }, [pinnedObjects]);

//   return <div ref={mapContainerRef} id="map" style={{ height: '100vh', width: '100vw' }} />;
// };

// export default MapboxExample