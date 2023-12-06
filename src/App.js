import './styles/App.css';
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Sidebar from './components/Sidebar';
import QuizPage from './pages/QuizPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route } from 'react-router-dom';

function App() {
  
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

const style = {
  textDecoration: 'none',
  color: 'black',
};