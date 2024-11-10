const wsUrl = import.meta.env.VITE_WS_URL;  // Getting the WebSocket URL

const socket = new WebSocket(wsUrl);

socket.onopen = () => {
  console.log('WebSocket connected');
  socket.send('Hello, server!');
};

socket.onmessage = (event: MessageEvent) => {
  console.log('WebSocket message:', event.data);
};

// Other WebSocket event handlers...
