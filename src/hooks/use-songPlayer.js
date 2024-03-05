import { useState } from 'react';

function useSongPlayer(songs) {

    const [isPlaying, setIsPlaying] = useState(false);
    const [songIndex, setSongIndex] = useState(0);
    const [volume, setVolume] = useState(.1);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

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

    const updatePlaying = (value) => { setIsPlaying(value);}
    const updateCurrentTime = (audioRef) => { setCurrentTime(audioRef.current.currentTime); }
    const updateDuration = (audioRef) => { setDuration(audioRef.current.duration); }
    const updateVolume = (audioRef, newVolume) => { 
        audioRef.current.volume = newVolume;
        setVolume(newVolume); 
    }

    return {
        songs,
        songIndex,
        isPlaying,
        currentTime,
        duration,
        volume,
        previous,
        next,
        playPause,
        updateCurrentTime,
        updateDuration,
        updateVolume,
        updatePlaying
    };
}

export default useSongPlayer;