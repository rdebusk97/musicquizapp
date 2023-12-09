import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function SongCard({ song, ...otherStyling }) {

    const trackName = song.name;
    const artistName = song.artists[0].name;
    const imageURL = song.album.images[0].url;
    
    return (
        <Card {...otherStyling} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                <CardContent sx={{ flex: '1 0 auto', width: '70%' }}>
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
            </Box>
        </Card>
    );
};

export default SongCard;