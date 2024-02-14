import SongPlayer from '../components/SongPlayer';

function QuizPage()
{
    const config = {
        audioSrc: (songs, songIndex) => songs[songIndex]?.preview_url,
        name: (songs, songIndex) => songs[songIndex]?.name,
        artist: (songs, songIndex) => songs[songIndex]?.artists[0]?.name,
        albumCover: (songs, songIndex) => songs[songIndex]?.album?.images[0]?.url
    };

    return (
        <div>
            <SongPlayer config={config} controls/>
        </div>
    );
};

export default QuizPage;