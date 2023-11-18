import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SpotifyAPIProvider } from './context/spotifyAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <SpotifyAPIProvider>
            <App />
        </SpotifyAPIProvider>
    </BrowserRouter>
);