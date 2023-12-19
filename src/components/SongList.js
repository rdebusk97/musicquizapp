import { useContext } from 'react';
import SongsContext from '../context/songs';
import SongCard from '../components/SongCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SongList()
{
    const { songs } = useContext(SongsContext);

    const renderedSongs = songs.map((song) => {
        return (
            <ListItem style={{ display: 'flex' }} key={song.uri}>
                <SongCard song={song} isList={true} style={{width: '500px'}}/>
            </ListItem>
        );
    });

    return (
        <div style={ { margin: '20px 0px' }}>
            <Typography variant="h4" gutterBottom>Song List</Typography>
            <List>
                {renderedSongs}
            </List>
        </div>
    );
};

export default SongList;