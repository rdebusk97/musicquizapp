import '../styles/SettingsPage.css'
import SongImporter from '../components/SongImporter';
import SongList from '../components/SongList';
import SongSearcher from '../components/SongSearcher';

function SettingsPage() {
    return (
        <div className="base">
            <div className="border">
                <SongSearcher/>
                <SongImporter/>
            </div>
            <div className="border">
                <SongList/>
            </div> 
        </div>
    )
};

export default SettingsPage;