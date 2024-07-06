import { useState } from 'react';

function useSettings() {

    // Load the initial state from local storage
    const initialRandomized = JSON.parse(localStorage.getItem('randomized')) || false;
    const initialAutoPlay = JSON.parse(localStorage.getItem('autoplay')) || false;

    //const initialUser = JSON.parse(localStorage.getItem('user')) || "";
    //const initialPass = JSON.parse(localStorage.getItem('pass')) || "";

    const [randomized, setRandomized] = useState(initialRandomized);
    const [autoPlay, setAutoPlay] = useState(initialAutoPlay);
    //const [user, setUser] = useState(initialUser);
    //const [pass, setPass] = useState(initialPass);

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