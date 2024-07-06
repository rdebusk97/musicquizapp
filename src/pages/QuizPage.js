import { useContext } from 'react';
import SongPlayer from '../components/SongPlayer';
import useSettings from '../hooks/use-settings';
import SongsContext from '../context/songs';

function QuizPage()
{
    const { randomized, autoPlay } = useSettings();
    const { songs } = useContext(SongsContext);
    
    const config = {
        audioSrc: (songs, songIndex) => songs[songIndex]?.preview_url,
        name: (songs, songIndex) => songs[songIndex]?.name,
        artist: (songs, songIndex) => songs[songIndex]?.artists[0]?.name,
        albumCover: (songs, songIndex) => songs[songIndex]?.album?.images[0]?.url
    };

    if (songs.length === 0) { return <h2>No songs selected.</h2>; }

    return (
        <SongPlayer songs={randomized ? shuffleSongs(songs) : songs} config={config} controls autoPlay={autoPlay}/>
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