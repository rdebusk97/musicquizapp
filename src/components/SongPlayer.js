import '../styles/SongPlayer.css';
import useSongPlayer from '../hooks/use-songPlayer';
import React, { useRef, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Stack, Slider, IconButton, Typography, FormControlLabel, Switch } from '@mui/material';
import { FastRewindRounded, FastForwardRounded, PauseRounded, PlayArrowRounded, VolumeUp, VolumeDown } from '@mui/icons-material';

function SongPlayer({ songs, config, controls, autoPlay }) {

    const [showSong, setShowSong] = useState(false);
    const { songIndex, isPlaying, currentTime, duration, volume,
        previous, next, playPause, updateCurrentTime, updateDuration, updateVolume, updatePlaying } = useSongPlayer(songs);
    
    const audioRef = useRef();

    useEffect(() => {
        audioRef.current.volume = volume;
        if (autoPlay) {
            updatePlaying(true);
            audioRef.current.play();
        }
    }, [songIndex]);

    const TinyText = styled(Typography)({
        fontSize: '0.75rem',
        opacity: 0.6,
        fontWeight: 500,
        letterSpacing: 0.2,
      });

    const previousSong = () => {
        previous();
        //setShowSong(false);
    }

    const nextSong = () => {
        next();
        //setShowSong(false);
    }

    const songInfoContent = (
        <div>
            <div className="songInformation">
                <img style={{ justifyContent: 'left'}} width="150" length="150" alt="test" src={config.albumCover(songs, songIndex)}></img>
                <div style={{ padding: '20px' }}>
                    <Typography variant="subtitle1">{config.name(songs, songIndex)}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">{config.artist(songs, songIndex)}</Typography>
                </div>
            </div>
        </div>
    );

    const controlsContent = (
        <div className="controls">
            <Slider value={currentTime} max={duration} color="success"/>
            <div style={{justifyContent: 'space-between', display: 'flex'}}>
                <TinyText>{formatTime(currentTime)}</TinyText>
                <TinyText>-{formatTime(duration - currentTime)}</TinyText>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <IconButton>
                    <FastRewindRounded fontSize="large" onClick={previousSong}/>
                </IconButton>
                <IconButton onClick={() => { playPause(audioRef); }}>
                    {isPlaying ? <PauseRounded fontSize="large"/> : <PlayArrowRounded fontSize="large"/>}
                </IconButton>
                <IconButton>
                    <FastForwardRounded fontSize="large" onClick={nextSong}/>
                </IconButton>
            </div>
            <Stack spacing={3} direction="row" alignItems="center">
                <VolumeDown />
                <Slider aria-label="Volume" color="success" min={0} max={1} step={.01} 
                    value={volume} onChangeCommitted={(_, value) => { updateVolume(audioRef, value) }}/>
                <VolumeUp />
            </Stack>
        </div>
    );

    const testButton = () => {
        setShowSong(!showSong);
    }

    const testSwitch = <FormControlLabel control={<Switch checked={showSong} onClick={testButton}/>} label="Show Song" sx={{ justifyContent: 'center' }}/>;

    const allContent = (
        <div style={{justifyContent: 'center'}}>
            <audio ref={audioRef} src={config.audioSrc(songs, songIndex)} autoPlay={false}
                onPlaying={() => updateDuration(audioRef)} onTimeUpdate={() => { updateCurrentTime(audioRef); }} onPlay={() => { updateDuration(audioRef); }}></audio>
            {testSwitch}
            <div className="baseBorder">
            <Typography sx={{ textAlign: 'center', padding: '5px' }}>{songIndex + 1} / {songs.length}</Typography>
                {showSong && songInfoContent}
                {controls && controlsContent}
            </div>
        </div>
    );

    return (
        <React.Fragment>
            {(songs.length > 0 && allContent) || <h5>No songs selected.</h5>}
        </React.Fragment>
    );
}

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

export default SongPlayer;