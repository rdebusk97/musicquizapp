import { Autocomplete, Button, TextField } from '@mui/material';
import { useState, useContext } from 'react';
import SongCard from '../components/SongCard';
import SongsContext from '../context/songs';
import SpotifyAPIContext from '../context/spotifyAPI';

function SongSearcher() {
    const { addSong } = useContext(SongsContext);
    const { getSearchResult } = useContext(SpotifyAPIContext);

    const [searchData, setSearchData] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);

    const handleChange = (event, value) => setSelectedSong(value);
    const handleButtonClick = () => selectedSong && addSong(selectedSong);
    const handleInputChange = (event) => {
        const term = event.target.value;

        if (!term || term === "") {
            return;
        }

        getSearchResult(term).then((data) => {
            setSearchData(data.filter(x => x.preview_url !== null));
        }).catch((error) => {
            console.error(error.message);
        });
    };

    return (
        <div style={{ display: 'flex' }}>
            <Autocomplete sx={{ width: '450px' }} options={searchData.map((option) => { return option; })} 
                onInputChange={handleInputChange} onChange={handleChange} value={selectedSong}
                renderInput={(params) => <TextField {...params} label="Search" />} 
                renderOption={(props, option) => <SongCard {...props} song={option}/>}
                getOptionLabel={(option) => option.name + " - " + option.artists[0].name}
                getOptionKey={(option) => option.id }
            />
            <Button variant="outlined" size="large" color="inherit" onClick={handleButtonClick}>Add</Button>               
        </div>
    )
};

export default SongSearcher;

