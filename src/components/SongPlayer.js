function SongPlayer({ audioSrc }) {
    return (
        <audio autoplay controls>
            <source src={audioSrc} type="audio/mp3"></source>
        </audio>
    );
}

export default SongPlayer;