import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function AutoCompleteResult({ option, ...props }) {

    return (
        <Card {...props} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {option.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {option.artists[0].name}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 120, height: 120 }}
                image={option.album.images[0].url}
                alt="Live from space album cover"
            />
        </Card>
    );
};

export default AutoCompleteResult;