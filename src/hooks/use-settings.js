import { useState } from 'react';

function useSettings() {
    const initialRandomized = JSON.parse(localStorage.getItem('randomized')) || false;
    const initialAutoPlay = JSON.parse(localStorage.getItem('autoplay')) || false;

    const [randomized, setRandomized] = useState(initialRandomized);
    const [autoPlay, setAutoPlay] = useState(initialAutoPlay);

    const updateRandomized = () => { 
        localStorage.setItem('randomized', JSON.stringify(!randomized));
        setRandomized(!randomized); 
    };

    const updateAutoPlay = () => {
        localStorage.setItem('autoplay', JSON.stringify(!autoPlay));
        setAutoPlay(!autoPlay); 
    }

    return {
        randomized,
        autoPlay,
        updateRandomized,
        updateAutoPlay
    };
}

export default useSettings;