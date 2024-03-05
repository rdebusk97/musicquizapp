import SongPlayer from '../components/SongPlayer';
import SongGuesser from '../components/SongGuesser';
import useSettings from '../hooks/use-settings';
import { useContext } from 'react';
import SongsContext from '../context/songs';

function QuizPage()
{
    const config = {
        audioSrc: (songs, songIndex) => songs[songIndex]?.preview_url,
        name: (songs, songIndex) => songs[songIndex]?.name,
        artist: (songs, songIndex) => songs[songIndex]?.artists[0]?.name,
        albumCover: (songs, songIndex) => songs[songIndex]?.album?.images[0]?.url
    };

    const { randomized, autoPlay } = useSettings();
    const { songs } = useContext(SongsContext);

    return (
        <div>
            <SongPlayer songs={randomized ? shuffleSongs(songs) : songs} config={config} controls autoPlay={autoPlay}/>
            <SongGuesser multipleChoice/>
        </div>
    );
};

export default QuizPage;

function shuffleSongs(songs) {
    const shuffledSongs = [...songs];
    for (let i = shuffledSongs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
    }
    return shuffledSongs;
}