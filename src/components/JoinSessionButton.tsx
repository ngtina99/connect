import React, { useState, useEffect } from 'react';

export function useJoinUrl(): string | null {
  const [joinUrl, setJoinUrl] = useState<string | null>(null);

  useEffect(() => {
    // Set the join URL here
    console.log('Setting join URL...');
    setJoinUrl('https://hacktogether-template-zg2.pages.dev');
    console.log('Join URL set to:', 'https://hacktogether-template-zg2.pages.dev');
  }, []); // Empty dependency array means it runs once, when the component mounts

  return joinUrl;
}

