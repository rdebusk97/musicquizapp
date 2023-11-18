import './styles/App.css';
import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef, useContext } from 'react';
import Sidebar from './components/Sidebar';
import QuizPage from './pages/QuizPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route } from 'react-router-dom';
import SpotifyAPIContext from './context/spotifyAPI';

    /*getAccessToken().then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });*/

function App() {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  //getAccessToken();

  useEffect(() => {
    const handler = (event) => {
      if (!sidebarRef.current) {
        return;
      }

      if (!sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    }
  }, []);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  return (
    <div className="grid-container"> 
      <Button onClick={openSidebar} sx={style}>
        <MenuIcon/>
      </Button>
      <Box sx={{ display: 'flex' }}>
        <div ref={sidebarRef}>
          <Sidebar open={isSidebarOpen} closeSidebar={closeSidebar}/>
        </div>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/settings" element={<SettingsPage/>}/>
            <Route path="/quiz" element={<QuizPage/>}/>
          </Routes>
        </Box>
      </Box>
    </div>
  );
};

export default App;

/*async function getArtist(artistID, accessToken) {
  try {
    const response = await axios.get(`https://api.spotify.com/v1/artists/${artistID}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200) {
      const artistData = response.data;
      return artistData;
    } else {
      throw new Error('Request to Spotify API failed.');
    }
  } catch (error) {
    // Handle errors, e.g., network errors, unauthorized access, etc.
    console.error('Error in getArtist:', error);
    throw error;
  }
}*/

/*async function getSearchResult(searchTerm, accessToken) {
  try {
    const searchTermUnderscored = searchTerm.replace(/ /g, "_");
    const response = await axios.get(`https://api.spotify.com/v1/search?query=${searchTermUnderscored}&type=track&market=us&limit=5&offset=0`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
  
    if (response.status === 200) {
      const artistData = response.data;
      console.log(artistData);
      return artistData;
    } else {
      throw new Error('Request to Spotify API failed.');
    }
  } catch (error) {
    // Handle errors, e.g., network errors, unauthorized access, etc.
    console.error('Error in API search:', error);
    throw error;
  }
}*/

const style = {
  textDecoration: 'none',
  color: 'black',
};