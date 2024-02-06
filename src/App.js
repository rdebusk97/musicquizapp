import './styles/App.css';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import Sidebar from './components/Sidebar';
import QuizPage from './pages/QuizPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import SongsPage from './pages/SongsPage';
import { Menu as MenuIcon, Home as HomeIcon, Quiz as QuizIcon, Settings as SettingsIcon, MusicNote as MusicNoteIcon } from '@mui/icons-material';

function App() {
  
  function createSidebarOption(text, icon) {
    return { text, icon };
  }

  const sidebarOptions = [
    createSidebarOption('Home', <HomeIcon/>),
    createSidebarOption('Settings', <SettingsIcon/>),
    createSidebarOption('Songs', <MusicNoteIcon/>),
    createSidebarOption('Quiz', <QuizIcon/>)
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef();

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

  const openSidebar = () => setIsSidebarOpen(true); 
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="baseContainer"> 
      <div className="sidebar" ref={sidebarRef}>
          <Sidebar open={isSidebarOpen} closeSidebar={closeSidebar} options={sidebarOptions}/>
          <Button color="inherit" onClick={openSidebar}>
            <MenuIcon/>
          </Button>
      </div>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/settings" element={<SettingsPage/>}/>
            <Route path="/songs" element={<SongsPage/>}/>
            <Route path="/quiz" element={<QuizPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;