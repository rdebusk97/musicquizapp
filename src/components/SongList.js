import { useContext } from 'react';
import SongsContext from '../context/songs';
import SongCard from '../components/SongCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ListItemIcon from '@mui/material/ListItemIcon';

function SongList()
{
    const { songs, deleteSongById } = useContext(SongsContext);

    const handleDeleteClick = (id) =>
    {
        deleteSongById(id);
    };

    const renderedSongs = songs.map((song) => {
        return (
            <ListItem style={{ display: 'flex' }}>
                <SongCard song={song} style={{width: '500px'}}/>
                <ListItemIcon>
                    <DeleteForeverIcon/>
                </ListItemIcon>
            </ListItem>
        );
    });

    return (
        <List>
            {renderedSongs}
        </List>
    );
};

export default SongList;