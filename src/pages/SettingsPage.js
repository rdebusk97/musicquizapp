import { Switch, FormControlLabel } from '@mui/material';
import useSettings from '../hooks/use-settings';

function SettingsPage() {
    
    const { randomized, autoPlay, updateRandomized, updateAutoPlay } = useSettings();

    // Randomization of songs

    // Multiple-choice vs short answer vs none
    // Repeat failed (Yes/No) - queue will get smaller til 
    // everything has been solved correctly once

    // Link to full song? 
    // Free vs. Premium use (access token vs. 30 sec clips)
    // Volume (default)

    // Score?

    
    return (
        <div style={{ display: 'grid' }}>
            <FormControlLabel control={<Switch checked={randomized} onChange={(e) => updateRandomized(e.target.checked)} />} label="Randomize Songs" />
            <FormControlLabel control={<Switch checked={autoPlay} onChange={(e) => updateAutoPlay(e.target.checked)} />} label="Auto Play Songs" />
        </div>
    )
};

export default SettingsPage;