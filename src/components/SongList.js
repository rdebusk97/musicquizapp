import { List, ListItem, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import SongsContext from '../context/songs';
import SongCard from '../components/SongCard';

function SongList()
{
    const { songs, setSongs } = useContext(SongsContext);

    const handleButtonClick = () => {
        setSongs([]);
    }

    const renderedSongs = songs.map((song) => {
        return (
            <ListItem style={{ display: 'flex' }} key={song.id}>
                <SongCard song={song} isList={true} style={{width: '450px'}}/>
            </ListItem>
        );
    });

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant="h4">Song List</Typography>
                <Button variant="outlined" size="large" onClick={handleButtonClick}>Delete All</Button>
            </div>
            <List sx={{maxHeight: '500px', overflow: 'auto'}}>
                {renderedSongs}
            </List>
        </div>
    );
};

export default SongList;