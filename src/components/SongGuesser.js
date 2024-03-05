import '../styles/SongGuesser.css';
import { useState } from 'react';
import { Button } from '@mui/material';

function SongGuesser({ shortAnswer, multipleChoice }) {

    if (shortAnswer && multipleChoice) { 
        console.error('Cannot be both short answer and multiple choice.'); 
    }
    
    const shortAnswerContent = (
        <div>Short Answer</div>
    );

    const multipleChoiceContent = (
        <div>Multiple Choice</div>
    );

    return (
        <div className="baseBorder">
            {shortAnswer && shortAnswerContent}
            {multipleChoice && multipleChoiceContent}
            <Button>Submit</Button>
        </div>
    );
};

export default SongGuesser;