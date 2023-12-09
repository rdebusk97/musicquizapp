import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SpotifyAPIProvider } from './context/spotifyAPI';
import { SongsProvider } from './context/songs';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <SongsProvider>
            <SpotifyAPIProvider>
                <App />
            </SpotifyAPIProvider>
        </SongsProvider>
    </BrowserRouter>
);