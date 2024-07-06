import '../styles/SettingsPage.css';
import { Switch, FormControlLabel, Typography } from '@mui/material';
import useSettings from '../hooks/use-settings';

function SettingsPage() {
    
    const { randomized, autoPlay, updateRandomized, updateAutoPlay } = useSettings();
    
    return (
        <div className="base">
            <div className="section">
                <Typography>Song Guessing Options</Typography>
                <FormControlLabel control={<Switch checked={randomized} onChange={(e) => updateRandomized(e.target.checked)} />} label="Randomize Songs" />
                <FormControlLabel control={<Switch checked={autoPlay} onChange={(e) => updateAutoPlay(e.target.checked)} />} label="Auto Play Songs" />
            </div>
        </div>
    );
};

export default SettingsPage;