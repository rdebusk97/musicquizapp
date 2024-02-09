import { useState, useContext } from 'react';
import SongsContext from '../context/songs';
import SongPlayer from '../components/SongPlayer';
import { Typography } from '@mui/material';

function QuizPage()
{
    const [songIndex, setSongIndex] = useState(0);

    const { songs } = useContext(SongsContext);
    const hasSongs = songs.length !== 0;

    const handleFastForward = () => {
        songs.length <= songIndex + 1 ? setSongIndex(0) : setSongIndex(songIndex + 1)
    }

    const handleFastRewind = () => {
        songIndex === 0 ? setSongIndex(songs.length - 1) : setSongIndex(songIndex - 1);
    }

    return (
        <div>
            <Typography variant="h6" align="center" style={{border: '2px solid green', borderRadius: '10px'}}>{songIndex + 1} of {songs.length}</Typography>
            {!hasSongs && "No songs selected."}
            {hasSongs && <SongPlayer 
                audioSrc={songs[songIndex].preview_url} 
                name={songs[songIndex]?.name} 
                artist={songs[songIndex]?.artists[0].name}
                albumCover={songs[songIndex].album.images[0].url} 
                controls
                fastForward={handleFastForward}
                fastRewind={handleFastRewind}/>}
        </div>
    );
};

export default QuizPage;