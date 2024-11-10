import React, { useEffect } from 'react';
import { useJoinUrl } from '../hooks/useJoinUrl';

export default function AutomatedJoinSessionButton() {
  const joinUrl = useJoinUrl();

  useEffect(() => {
    if (joinUrl) {
      // Automatically opens the join URL in a new tab
      window.open(joinUrl, '_blank');
    } else {
      console.log('No active session available.');
    }
  }, [joinUrl]);

  return null; // No UI is needed if it's automated
}
