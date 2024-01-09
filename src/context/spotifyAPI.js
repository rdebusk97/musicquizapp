import { createContext } from 'react';
import axios from 'axios';
import useAccessToken from '../hooks/use-accessToken';

const SpotifyAPIContext = createContext();

function SpotifyAPIProvider({ children }) {

    const { accessToken, refreshAccessToken } = useAccessToken();

    const getSearchResult = async (searchTerm) => {
        refreshAccessToken();
        const searchTermUnderscored = searchTerm.replace(/ /g, "_");

        try {
            const response = await axios.get(`https://api.spotify.com/v1/search?query=${searchTermUnderscored}&type=track&market=us&limit=10&offset=0&market=US`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.status === 200) {
                const searchResultData = response.data;
                //console.log(searchResultData.tracks.items);
                return searchResultData.tracks.items;
            } else {
                throw new Error('Request to Spotify API failed: Search');
            }
        } catch (error) {
            // Handle errors, e.g., network errors, unauthorized access, etc.
            console.error('Error in API search:', error);
            throw error;
        }
    }

    const getPlaylist = async (id) => {
        refreshAccessToken();

        try {
            const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.status === 200) {
                const searchResultData = response.data;
                return searchResultData.tracks.items;
            } else {
                throw new Error('Request to Spotify API failed: Get Playlist.');
            }
        } catch (error) {
            console.error('Error in API search:', error);
            throw error;
        }
    }

    const options = {
        getSearchResult,
        getPlaylist
    };

    return (
        <SpotifyAPIContext.Provider value={options}>
            {children}
        </SpotifyAPIContext.Provider>
    );
}

export { SpotifyAPIProvider };
export default SpotifyAPIContext;
