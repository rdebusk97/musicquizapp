import '../styles/SettingsPage.css'
import { useState, useContext } from 'react';
import SongsContext from '../context/songs';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SpotifyAPIContext from '../context/spotifyAPI';
import SongCard from '../components/SongCard';
import Button from '@mui/material/Button';
import SongList from '../components/SongList';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function SettingsPage() {

    const { addSong } = useContext(SongsContext);
    const { getSearchResult } = useContext(SpotifyAPIContext);

    const [searchData, setSearchData] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);

    const handleInputChange = (event) => {
        const term = event.target.value;

        if (!term || term === "") {
            return;
        }

        getSearchResult(term).then((data) => {
            setSearchData(data);
        }).catch((error) => {
            console.error(error.message);
        });
    };

    const handleChange = (event, value) => setSelectedSong(value);
    const handleButtonClick = () => addSong(selectedSong);

    return (
        <div className="base">
            <div style={{ display: 'flex' }}>
                <Autocomplete sx={{ width: 500 }} options={searchData.map((option) => { return option; })} 
                    onInputChange={handleInputChange} onChange={handleChange} value={selectedSong}
                    renderInput={(params) => <TextField {...params} label="Search" />} 
                    renderOption={(props, option) => <SongCard {...props} song={option}/>}
                    getOptionLabel={(option) => option.name + " - " + option.artists[0].name}
                    getOptionKey={(option) => option.uri }
                />
                <Button variant="outlined" size="large" onClick={handleButtonClick}>Add</Button>               
            </div>
            <SongList/>
        </div>
    )
};

export default SettingsPage;