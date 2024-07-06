import { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';

function useAccessToken() {
    
    const [accessToken, setAccessToken] = useState(null);

    const getAccessToken = async () => {
        const headers = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: '', // Insert Spotify client ID
                password: '', // Insert Spotify client secret
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
            
            return response.data.access_token;
        } catch (error) {
            console.log(error);
        }
    };

    const refreshAccessToken = async () => {
        const newAccessToken = await getAccessToken();
        setAccessToken(newAccessToken);
    }

    useEffect(() => {
        const initializeAccessToken = async () => {
            const initialAccessToken = await getAccessToken();
            setAccessToken(initialAccessToken);
        };

        initializeAccessToken();
    }, []);

    return { accessToken, refreshAccessToken };
}

export default useAccessToken;