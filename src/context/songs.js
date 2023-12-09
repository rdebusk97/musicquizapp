import { createContext, useState } from 'react';

const SongsContext = createContext();

function SongsProvider({ children }) {
    const [songs, setSongs] = useState([]);

    const addSong = (song) => {
        const updatedSongs = [
            ...songs,
            song
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
        <SongsContext.Provider value={{ songs, addSong, deleteSongById }}>
            {children}
        </SongsContext.Provider>
    );
}

export { SongsProvider };
export default SongsContext;