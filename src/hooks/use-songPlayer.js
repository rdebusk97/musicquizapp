import { useState, useContext, useRef } from 'react';
import SongsContext from '../context/songs';

function useSongPlayer() {

    const { songs } = useContext(SongsContext);

    const [isPlaying, setIsPlaying] = useState(false);
    const [songIndex, setSongIndex] = useState(0);
    const [volume, setVolume] = useState(.4);

    const previous = () => { 
        songIndex === 0 ? setSongIndex(songs.length - 1) : setSongIndex(songIndex - 1);
        setIsPlaying(false);
    };

    const next = () => { 
        songs.length <= songIndex + 1 ? setSongIndex(0) : setSongIndex(songIndex + 1); 
        setIsPlaying(false);
    }

    const playPause = (audioRef) => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }

    return {
        songs,
        songIndex,
        isPlaying,
        previous,
        next,
        playPause
    };
}

export default useSongPlayer;