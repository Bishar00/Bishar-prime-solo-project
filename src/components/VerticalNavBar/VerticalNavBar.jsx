import React from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useHistory } from 'react-router-dom';


const drawerWidth = 50;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const VerticalNavBar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="right"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List className='sidebar-container'>
        <ListItem  onClick={() => history.push('/Favorite')}>
          <ListItemIcon>
            <FavoriteBorderIcon  className='icon'/>
          </ListItemIcon>
          <ListItemText  />
        </ListItem>
        <ListItem  onClick={() => history.push('/Message')}>
          <ListItemIcon className='icon'>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText  />
        </ListItem>
        <ListItem  onClick={() => history.push('/Settings')}>
          <ListItemIcon className='icon'>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText  />
        </ListItem>
        <ListItem  onClick={() => history.push('/Profile')}>
          <ListItemIcon className='icon'>
            <PermIdentityIcon />
          </ListItemIcon>
          <ListItemText  />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default VerticalNavBar;