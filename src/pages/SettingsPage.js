import { useState, useContext } from 'react';
import SongsContext from '../context/songs';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SpotifyAPIContext from '../context/spotifyAPI';
import SongCard from '../components/SongCard';
import Button from '@mui/material/Button';
import SongList from '../components/SongList';

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
        <div>
            <div style={{ display: 'flex' }}>
                <Autocomplete sx={{ width: 500 }} options={searchData.map((option) => { return option; })} 
                    onInputChange={handleInputChange} onChange={handleChange} value={selectedSong}
                    renderInput={(params) => <TextField {...params} label="Search" />} 
                    renderOption={(props, option) => <SongCard {...props} song={option}/>}
                    getOptionLabel={(option) => option.name + " - " + option.artists[0].name}
                />
                <Button variant="outlined" sx={{ width: 80 }} onClick={handleButtonClick}>Add</Button>               
            </div>
            <h1>Song List</h1>
            <SongList/>
        </div>
    )
};

export default SettingsPage;