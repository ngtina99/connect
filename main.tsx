import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactTogether } from 'react-together'
import { BrowserRouter as Router } from 'react-router-dom'
import { MoodProvider } from '@hooks/Mood/MoodContext'

import App from '@/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MoodProvider>
    <ReactTogether
      sessionParams={{
        appId: import.meta.env['VITE_APP_ID'],
        apiKey: import.meta.env['VITE_API_KEY'],
        name: import.meta.env['VITE_SESSION_NAME'],
        password: import.meta.env['VITE_SESSION_PASSWORD'],
      }}
    >
      <Router>
        <App />
      </Router>
    </ReactTogether>
    </MoodProvider>
  </StrictMode>
)