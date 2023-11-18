import { useState, createContext } from 'react';
import axios from 'axios';
import qs from 'qs';

const SpotifyAPIContext = createContext();

function SpotifyAPIProvider({ children }) {

    const [accessToken, setAccessToken] = useState("");

    const getAccessToken = async () => {
        const headers = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: '39010915c2474b30ac94944c91c75bc4',
                password: '16eec700814546dba4cf58a9c2651ffa',
            }
        };
        const data = {
            grant_type: 'client_credentials',
        };

        try {
            const response = await axios.post(
                'https://accounts.spotify.com/api/token',
                qs.stringify(data),
                headers
            );

            const token = response.data.access_token;
            console.log(token); //test
            return token;
        } catch (error) {
            console.log(error);
        }
    };

    const getSearchResult = async (searchTerm, accessToken) => {
        const searchTermUnderscored = searchTerm.replace(/ /g, "_");

        try {          
            const response = await axios.get(`https://api.spotify.com/v1/search?query=${searchTermUnderscored}&type=track&market=us&limit=5&offset=0`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.status === 200) {
                const searchResultData = response.data;
                console.log(searchResultData.tracks.items);
                return searchResultData.items;
            } else {
                throw new Error('Request to Spotify API failed.');
            }
        } catch (error) {
            // Handle errors, e.g., network errors, unauthorized access, etc.
            console.error('Error in API search:', error);
            throw error;
        }
    }

    const options = {
        accessToken,
        getAccessToken,
        getSearchResult
    };

    return (
        <SpotifyAPIContext.Provider value={options}>
            {children}
        </SpotifyAPIContext.Provider>
    );
}

export { SpotifyAPIProvider };
export default SpotifyAPIContext;
