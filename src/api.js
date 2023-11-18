import axios from 'axios';
import qs from 'qs';

export const getAccessToken = async () => {  
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: '39010915c2474b30ac94944c91c75bc4',
      password: '16eec700814546dba4cf58a9c2651ffa',
    },
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