import { useState, useEffect } from 'react';

export function useJoinUrl(): string | null {
  const [joinUrl, setJoinUrl] = useState<string | null>(null);

  useEffect(() => {
    // Replace with actual logic to fetch or generate the join URL
    setJoinUrl('https://hacktogether-template-zg2.pages.dev/');
  }, []);

  return joinUrl;
}
