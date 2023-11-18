import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import SpotifyAPIContext from '../context/spotifyAPI';

function SettingsPage() {

    var token;
    const { getAccessToken, getSearchResult } = useContext(SpotifyAPIContext);

    const handleAccessTokenClick = () => {
        const tokenPromise = getAccessToken();

        tokenPromise.then((access_token) => {
            token = access_token;
        });
    }

    const handleClick = () => {
        getSearchResult(
            "HERE, THERE, AND EVERYWHERE",
            token);
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleAccessTokenClick}>Get new Access Token</Button>
            <Button variant="outlined" onClick={handleClick}>test SEARCH</Button>
            <Autocomplete options={['1', '2']}
                renderInput={(params) => <TextField {...params} label="Search" />} />
        </div>

    )
};

export default SettingsPage;