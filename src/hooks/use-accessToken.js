import { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';

const useAccessToken = () => {
    
    const [accessToken, setAccessToken] = useState(null);

    const getAccessToken = async () => {
        const headers = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: '39010915c2474b30ac94944c91c75bc4',
                password: '4c3e1e519c7145089804f86b64df109a',
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
    }, []); // Run only once when the component mounts

    return { accessToken, refreshAccessToken };
}

export default useAccessToken;