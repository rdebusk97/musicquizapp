import '../styles/SongPlayer.css';
import { styled, useTheme } from '@mui/material/styles';
import { useRef, useState } from 'react';
import SongCard from '../components/SongCard';
import { Stack, Slider, IconButton, Typography, Switch, FormControlLabel, TinyText } from '@mui/material';
import { FastRewindRounded, FastForwardRounded, PauseRounded, PlayArrowRounded, VolumeUp, VolumeDown } from '@mui/icons-material';

function SongPlayer({ songs, controls }) {

    const [isPlaying, setIsPlaying] = useState(false);
    const [songIndex, setSongIndex] = useState(0);
    const [showSong, setShowSong] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);

    const TinyText = styled(Typography)({
        fontSize: '0.75rem',
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2,
      });


    const handlePlayPause = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }

    const handleFastForward = () => {
        songs.length <= songIndex + 1 ? setSongIndex(0) : setSongIndex(songIndex + 1);
        setIsPlaying(false);
    }

    const handleFastRewind = () => {
        songIndex === 0 ? setSongIndex(songs.length - 1) : setSongIndex(songIndex - 1);
        setIsPlaying(false);
    }

    const songInfoContent = (
        <div className="songInformation">
            <img style={{justifyContent: 'left'}}width="120" length="120" alt="test" src={songs[songIndex].album.images[0].url} borderRadius={8}></img>
            <div style={{ padding: '20px' }}>
                <Typography variant="subtitle1" size="large">{songs[songIndex]?.name}</Typography>
                <Typography variant="subtitle2" color="text.secondary">{songs[songIndex]?.artists[0]?.name}</Typography>
            </div>
        </div>
    );

    const controlsContent = (
        <div className="controls">
            <Slider/>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <TinyText>{0}</TinyText>
                <TinyText>{0}</TinyText>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <IconButton>
                    <FastRewindRounded fontSize="large" onClick={handleFastRewind}/>
                </IconButton>
                <IconButton onClick={handlePlayPause}>
                    {isPlaying ? <PauseRounded fontSize="large"/> : <PlayArrowRounded fontSize="large"/>}
                </IconButton>
                <IconButton>
                    <FastForwardRounded fontSize="large" onClick={handleFastForward}/>
                </IconButton>
            </div>
            <Stack spacing={3} direction="row" alignItems="center">
                <VolumeDown />
                <Slider aria-label="Volume"/>
                <VolumeUp />
            </Stack>
        </div>
    )

    const handleTimeChange = () => {
        setCurrentTime(audioRef.currentTime);
    }

    const audioRef = useRef();

    const testButton = () => {
        setShowSong(!showSong);
    }

    const test = <FormControlLabel control={<Switch checked={showSong} onClick={testButton}/>} label="Show Song"/>;
    
    return (
        <div>
            {test}
            <audio ref={audioRef} src={songs[songIndex].preview_url} loop volume={.4} 
                onTimeUpdate={handleTimeChange}/>
            <Typography variant="h6" align="center">Song {songIndex + 1} / {songs.length}</Typography>
            <div className="baseBorder">
                {showSong && songInfoContent}
                {controls && controlsContent}
            </div>
        </div>
    );
}

export default SongPlayer;