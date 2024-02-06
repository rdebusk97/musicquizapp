import { useContext } from 'react';
import SongsContext from '../context/songs';
import SongPlayer from '../components/SongPlayer';

function QuizPage()
{
    const { songs } = useContext(SongsContext);
    const hasSongs = songs.length !== 0;

    return (
        <div>
            {!hasSongs && "No songs selected."}
            {hasSongs && <SongPlayer songs={songs} controls/>}
        </div>
    );
};

export default QuizPage;