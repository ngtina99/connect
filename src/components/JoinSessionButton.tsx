import React from 'react';
import { useJoinUrl } from '../hooks/useJoinUrl.ts';

export default function JoinSessionButton() {
  const joinUrl = useJoinUrl(); // Ensure the hook is used here

  const handleJoinClick = () => {
    if (joinUrl) {
      window.open(joinUrl, '_blank'); // Opens in a new tab
    } else {
      alert('No active session available.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <button onClick={handleJoinClick} disabled={!joinUrl}>
        Join Session
      </button>
    </div>
  );
}