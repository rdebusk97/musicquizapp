import { createContext, useState } from 'react';

const SongsContext = createContext();

function SongsProvider({ children }) {
    const [songs, setSongs] = useState([]);

    const addSong = (song) => {
        if (songs.includes(song)) {
            return;
        }

        const updatedSongs = [
            ...songs,
            song
        ];
        setSongs(updatedSongs);
    }

    const addSongRange = (songRange) => {
        const updatedSongs = [
            ...songs,
            ...songRange
        ];

        setSongs(updatedSongs);
    }

    const deleteSongById = (id) => {
        const updatedSongs = songs.filter((song) =>
        {
            return song.id !== id;
        });

        setSongs(updatedSongs);
    }

    return (
        <SongsContext.Provider value={{ songs, setSongs,addSong, addSongRange, deleteSongById }}>
            {children}
        </SongsContext.Provider>
    );
}

export { SongsProvider };
export default SongsContext;