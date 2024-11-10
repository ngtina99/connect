import React, { useState, useEffect } from 'react';

// Define types for session data and WebSocket data (Adjust types based on your API response)
interface SessionData {
  // Define the shape of the session data returned from the API
  id: string;
  name: string;
  // Add more fields as necessary
}

const SessionComponent: React.FC = () => {
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [wsData, setWsData] = useState<string | null>(null);  // Adjust type based on WebSocket response

  // Fetch URLs from environment variables
  const apiUrl = import.meta.env.VITE_API_URL;  // Using Vite's import.meta.env
  const wsUrl = import.meta.env.VITE_WS_URL;

  // Fetch session data from API when the component mounts
  useEffect(() => {
    // Fetch data from the backend API
    fetch(`${apiUrl}/session`)  // Modify this endpoint as needed
      .then((response) => response.json())
      .then((data: SessionData) => setSessionData(data))
      .catch((error) => console.error('Error fetching session data:', error));

    // Setup WebSocket connection
    const socket = new WebSocket(wsUrl);

    socket.onopen = () => {
      console.log('WebSocket connected');
      socket.send('Hello, server!'); // Send a test message to the server if needed
    };

    socket.onmessage = (event: MessageEvent) => {
      // Update state with new WebSocket data
      setWsData(event.data);
    };

    socket.onclose = () => {
      console.log('WebSocket closed');
    };

    socket.onerror = (error: Event) => {
      console.error('WebSocket Error:', error);
    };

    // Cleanup WebSocket connection when component unmounts
    return () => {
      socket.close();
    };
  }, [apiUrl, wsUrl]);

  return (
    <div>
      <h1>Session Info</h1>
      {sessionData ? (
        <pre>{JSON.stringify(sessionData, null, 2)}</pre>
      ) : (
        <p>Loading session data...</p>
      )}
      <h2>WebSocket Data</h2>
      {wsData ? (
        <pre>{wsData}</pre>
      ) : (
        <p>No WebSocket data received yet.</p>
      )}
    </div>
  );
};

export default SessionComponent;
