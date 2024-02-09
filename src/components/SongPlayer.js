import '../styles/SongPlayer.css';
import { styled, useTheme } from '@mui/material/styles';
import { useRef, useState } from 'react';
import SongCard from '../components/SongCard';
import { Stack, Slider, IconButton, Typography, Switch, FormControlLabel, TinyText } from '@mui/material';
import { FastRewindRounded, FastForwardRounded, PauseRounded, PlayArrowRounded, VolumeUp, VolumeDown } from '@mui/icons-material';

function SongPlayer({ audioSrc, artist, name, albumCover, controls, fastForward, fastRewind }) {

    const [isPlaying, setIsPlaying] = useState(false);
    const [showSong, setShowSong] = useState(true);

    const handlePlayPause = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }

    const handleFastForward = () => {
        fastForward();
        setIsPlaying(false);
    }

    const handleFastRewind = () => {
        fastRewind();
        setIsPlaying(false);
    }

    const songInfoContent = (
        <div className="songInformation">
            <img style={{justifyContent: 'left'}}width="120" length="120" alt="test" src={albumCover}></img>
            <div style={{ padding: '20px' }}>
                <Typography variant="subtitle1" size="large">{name}</Typography>
                <Typography variant="subtitle2" color="text.secondary">{artist}</Typography>
            </div>
        </div>
    );

    const controlsContent = (
        <div className="controls">
            <Slider/>
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

    const audioRef = useRef();

    const testButton = () => {
        setShowSong(!showSong);
    }

    const test = <FormControlLabel control={<Switch checked={showSong} onClick={testButton}/>} label="Show Song"/>;
    
    return (
        <div>
            {test}
            <audio ref={audioRef} src={audioSrc} loop volume={.4}/>
            <div className="baseBorder">
                {showSong && songInfoContent}
                {controls && controlsContent}
            </div>
        </div>
    );
}

export default SongPlayer;