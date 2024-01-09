import { useContext } from 'react';
import SongsContext from '../context/songs';
import SongPlayer from '../components/SongPlayer';

function QuizPage()
{
    const { songs } = useContext(SongsContext);
    const audioSource = songs[0].preview_url;

    return (
        <SongPlayer audioSrc={audioSource}/>
    );
};

export default QuizPage;