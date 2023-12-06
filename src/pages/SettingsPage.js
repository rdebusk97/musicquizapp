import { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SpotifyAPIContext from '../context/spotifyAPI';
import AutocompleteResult from '../components/AutocompleteResult';

function SettingsPage() {

    const { getSearchResult } = useContext(SpotifyAPIContext);
    const [searchData, setSearchData] = useState([]);

    const [quizSongs, setQuizSongs] = useState([]);

    const handleChange = (event) => {
        const term = event.target.value;

        if (!term || term === "") {
            return;
        }

        getSearchResult(term).then((data) => {
            setSearchData(data);
        }).catch((error) => {
            console.error(error.message);
        });
    }

    return (
        <div>
            <div>
                <Autocomplete sx={{ width: 500 }} options={searchData.map((option) => { return option; })} 
                    onInputChange={handleChange}
                    renderInput={(params) => <TextField {...params} label="Search" />} 
                    renderOption={(props, option) => <AutocompleteResult {...props} option={option}/>}
                    getOptionLabel={(option) => option.name + " - " + option.artists[0].name}
                    getOptionKey={(option) => option.id}/>
            </div>
            <div>
                {quizSongs.map((quizSong) => { return quizSong })}
            </div>
        </div>
    )
};

export default SettingsPage;