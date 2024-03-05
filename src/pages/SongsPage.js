import '../styles/SongsPage.css';
import SongImporter from '../components/SongImporter';
import SongList from '../components/SongList';
import SongSearcher from '../components/SongSearcher';

function SongsPage() {

    const config = {
        name: (song) => song.name,
        artist: (song) => song?.artists[0]?.name,
        albumCover: (song) => song?.album?.images[0]?.url || 
            "https://cdn-icons-png.flaticon.com/128/13018/13018321.png"
    };

    return (
        <div className="base">
            <div className="border">
                <SongSearcher config={config}/>
                <SongImporter/>
            </div>
            <div className="border">
                <SongList config={config} isEditable/>
            </div>
        </div>
    )
};

export default SongsPage;