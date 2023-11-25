import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import useAccessToken from '../hooks/use-accessToken';
import SpotifyAPIContext from '../context/spotifyAPI';

function SettingsPage() {

    const { getSearchResult } = useContext(SpotifyAPIContext);

    const { accessToken, refreshAccessToken } = useAccessToken();

    const handleAccessTokenClick = () => {
        refreshAccessToken();
    };

    const handleClick = () => {
        getSearchResult(
            "IGOR");
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