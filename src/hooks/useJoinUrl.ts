import { useState, useEffect } from 'react';

export function useJoinUrl(): string | null {
  const [joinUrl, setJoinUrl] = useState<string | null>(null);

  useEffect(() => {
    // Set the join URL when the component mounts
    setJoinUrl('https://hacktogether-template-zg2.pages.dev/'); // Replace this with the actual URL
  }, []); // Empty dependency array means it runs only once when the component mounts

  return joinUrl;
}
// export function useJoinUrl(): string | null {
//   const [joinUrl, setJoinUrl] = useState<string | null>(null);

//   useEffect(() => {
//     // Replace with actual logic to fetch or generate the join URL
//     setJoinUrl('https://hacktogether-template-zg2.pages.dev/');
//   }, []);

//   return joinUrl;
// }
