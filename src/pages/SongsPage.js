import '../styles/SongsPage.css';
import SongImporter from '../components/SongImporter';
import SongList from '../components/SongList';
import SongSearcher from '../components/SongSearcher';

function SongsPage() {
    return (
        <div className="base">
            <div className="border">
                <SongSearcher/>
                <SongImporter/>
            </div>
            <div className="border">
                <SongList isEditable/>
            </div>
        </div>
    )
};

export default SongsPage;