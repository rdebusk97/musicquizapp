import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

function Sidebar({ open, closeSidebar, options }) {
  
  const closeButton = (
    <ListItem onClick={closeSidebar}>
      <ListItemButton>
        <CloseIcon/>
      </ListItemButton> 
    </ListItem>
  );

  const sidebarOptions = options.map((option) => {
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
      {sidebarOptions}
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

export default Sidebar;