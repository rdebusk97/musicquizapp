import '../styles/SongCard.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useContext } from 'react';
import SongsContext from '../context/songs';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function SongCard({ song, isEditable, ...otherStyling }) {

    const trackName = song.name;
    const artistName = song.artists[0].name;
    const imageURL = song.album.images[0]?.url || 
        "https://cdn-icons-png.flaticon.com/128/13018/13018321.png";

    const { deleteSongById } = useContext(SongsContext);
    const handleDeleteClick = () => deleteSongById(song.id);
    
    return (
        <Card {...otherStyling} sx={{width: '100%', display: 'flex'}}>
            <div className="baseDisplay left">
                <CardContent sx={{ flex: '1 0 auto', width: '100%' }}>
                    <Typography variant="h6">
                        {trackName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {artistName}
                    </Typography>
                </CardContent>
            </div>
            <div className="baseDisplay right">
                <CardMedia
                    component="img"
                    sx={{ width: 100, height: 100, marginY: '5px' }}
                    image={imageURL}
                    alt={imageURL}
                />
                {isEditable && <DeleteForeverIcon sx={{ width: '50px', height: '50px' }} onClick={handleDeleteClick}/>}
            </div>
        </Card>
    );
};

export default SongCard;