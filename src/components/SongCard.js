import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useContext } from 'react';
import SongsContext from '../context/songs';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function SongCard({ song, isList, ...otherStyling }) {

    const trackName = song.name;
    const artistName = song.artists[0].name;
    const imageURL = song.album.images[0]?.url || "https://cdn-icons-png.flaticon.com/128/13018/13018321.png";

    const { deleteSongById } = useContext(SongsContext);
    const handleDeleteClick = () => deleteSongById(song.id);
    
    return (
        <Card {...otherStyling} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                <CardContent sx={{ flex: '1 0 auto', width: '50%' }}>
                    <Typography component="div" variant="h5">
                        {trackName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {artistName}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 100, height: 100 }}
                    image={imageURL}
                    alt={imageURL}
                />
                {isList && <DeleteForeverIcon sx={{ width: '50px', height: '50px'}} onClick={handleDeleteClick}/>}
            </Box>
        </Card>
    );
};

export default SongCard;