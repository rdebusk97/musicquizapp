import { Link } from 'react-router-dom';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import QuizIcon from '@mui/icons-material/Quiz';
import SettingsIcon from '@mui/icons-material/Settings';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';

function Sidebar({ open, closeSidebar })
{
  const sidebarOptions = [
    createSidebarOption('Home', <HomeIcon/>),
    createSidebarOption('Settings', <SettingsIcon/>),
    createSidebarOption('Quiz', <QuizIcon/>)
  ];

  const closeButton = (
    <ListItem onClick={closeSidebar}>
      <ListItemButton>
        <CloseIcon/>
      </ListItemButton> 
    </ListItem>
  );

  const options = sidebarOptions.map((option) => {
    return (
        <ListItem key={option.text} onClick={closeSidebar}>
          <Link to={`/${option.text !== 'Home' ? option.text.toLowerCase() : ''}`} style={linkStyle}>
            <ListItemButton>
              <ListItemIcon>
                {option.icon}
              </ListItemIcon>
              <ListItemText primary={option.text}/>
            </ListItemButton>
          </Link>
        </ListItem>
    )
  });

  const allOptions = (
    <React.Fragment>
      {closeButton}
      {options}
    </React.Fragment>
  );

  const drawerWidth = 180;

  return (
    <Drawer anchor="left" open={open} sx={{ width: drawerWidth }}>
      <List>
        {allOptions}
      </List>
    </Drawer>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
};

function createSidebarOption(text, icon) {
  return { text, icon };
}

export default Sidebar;