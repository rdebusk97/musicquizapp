import '../styles/SongList.css';
import { List, ListItem, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import SongsContext from '../context/songs';
import SongCard from '../components/SongCard';

function SongList({ config, isEditable })
{
    const { songs, setSongs } = useContext(SongsContext);

    const handleButtonClick = () => {
        setSongs([]);
    }

    const renderedSongs = songs.map((song) => {
        return (
            <ListItem key={song.id}>
                <SongCard song={song} config={config} isEditable={isEditable}/>
            </ListItem>
        );
    });

    const fullList = (
        <List sx={{maxHeight: '500px', overflow: 'auto', marginTop: '10px'}}>
            {renderedSongs}
        </List>
    );

    const renderEditableOption = (
        <Button variant="outlined" size="large" color="inherit" onClick={handleButtonClick}>
            Delete All
        </Button>
    );

    return (
        <div>
            <div className="songListHeader">
                <Typography variant="h4">
                    Song List
                </Typography>
                {isEditable && renderEditableOption}
            </div>
            {(songs.length > 0 && fullList) || <List>Add songs!</List>}
        </div>
    );
};

export default SongList;