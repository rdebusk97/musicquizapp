import { useState } from 'react';

function useSettings() {

    // Load the initial state from local storage
    const initialRandomized = JSON.parse(localStorage.getItem('randomized')) || false;
    const initialAutoPlay = JSON.parse(localStorage.getItem('autoplay')) || false;

    const [randomized, setRandomized] = useState(initialRandomized);
    const [autoPlay, setAutoPlay] = useState(initialAutoPlay);
    const [songGuessingOption, setSongGuessingOption] = useState(songGuessingOptions.None);

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

const songGuessingOptions = {
    None: 'None',
    ShortAnswer: 'Short Answer',
    MultipleChoice: 'Multiple Choice'
};

export default useSettings;