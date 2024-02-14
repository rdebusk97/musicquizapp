import '../styles/SongPlayer.css';
import { useRef } from 'react';
import { Stack, Slider, IconButton, Typography, Switch, FormControlLabel, TinyText } from '@mui/material';
import { FastRewindRounded, FastForwardRounded, PauseRounded, PlayArrowRounded, VolumeUp, VolumeDown } from '@mui/icons-material';
import useSongPlayer from '../hooks/use-songPlayer';

function SongPlayer({ config, controls }) {

    /*const [showSong, setShowSong] = useState(true);*/
    const { songs, songIndex, isPlaying, previous, next, playPause } = useSongPlayer();

    const songInfoContent = (
        <div className="songInformation">
            <img style={{ justifyContent: 'left'}}width="120" length="120" alt="test" src={config.albumCover(songs, songIndex)}></img>
            <div style={{ padding: '20px' }}>
                <Typography variant="subtitle1" size="large">{config.name(songs, songIndex)}</Typography>
                <Typography variant="subtitle2" color="text.secondary">{config.artist(songs, songIndex)}</Typography>
            </div>
        </div>
    );

    const controlsContent = (
        <div className="controls">
            <Slider/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <IconButton>
                    <FastRewindRounded fontSize="large" onClick={() => { previous(); }}/>
                </IconButton>
                <IconButton onClick={() => { playPause(audioRef); }}>
                    {isPlaying ? <PauseRounded fontSize="large"/> : <PlayArrowRounded fontSize="large"/>}
                </IconButton>
                <IconButton>
                    <FastForwardRounded fontSize="large" onClick={() => { next(); }}/>
                </IconButton>
            </div>
            <Stack spacing={3} direction="row" alignItems="center">
                <VolumeDown />
                <Slider aria-label="Volume"/>
                <VolumeUp />
            </Stack>
        </div>
    );

    const audioRef = useRef();
    const audio = (
        <audio ref={audioRef} src={config.audioSrc(songs, songIndex)} loop volume={.4}></audio>
    );

    /*const testButton = () => {
        setShowSong(!showSong);
    }*/

    /*const test = <FormControlLabel control={<Switch checked={showSong} onClick={testButton}/>} label="Show Song" sx={{justifyContent: 'center'}}/>;*/
    
    return (
        <div>
            {audio}
            <div className="baseBorder">
                {/*showSong && */songInfoContent}
                {controls && controlsContent}
            </div>
        </div>
    );
}

export default SongPlayer;