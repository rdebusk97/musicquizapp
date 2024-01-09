import { Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import SpotifyAPIContext from '../context/spotifyAPI';
import SongsContext from '../context/songs';

function SongImporter() {

    const [playlistURL, setPlaylistURL] = useState("");

    const { getPlaylist } = useContext(SpotifyAPIContext);
    const { addSongRange } = useContext(SongsContext);

    const handleChange = (event) => setPlaylistURL(event.target.value);
    const handleButtonClick = async () => {
        try
        {
            var afterPlaylist = playlistURL.split('/playlist/')[1];
            var playlistId = afterPlaylist.split('?')[0];   
    
            const playlistData = await getPlaylist(playlistId);
            const allTracks = playlistData.map(x => x.track).flat().filter(x => x.preview_url !== null);
            addSongRange(allTracks);
    
            setPlaylistURL("");
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div style={{ display: 'flex', marginTop: '20px' }}>
            <TextField sx={{width: '400px'}} id="standard-basic" label="Import URL" 
                variant="outlined" onChange={handleChange} value={playlistURL}/>
            <Button variant="outlined" size="large" onClick={handleButtonClick}>Import</Button>
        </div> 
    );
};

export default SongImporter;