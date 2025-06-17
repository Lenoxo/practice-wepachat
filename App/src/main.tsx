import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ProfilesProvider } from './context/ProfilesProvider.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ProfilesProvider>
            <App />
        </ProfilesProvider>
    </StrictMode>
);
