import './VerticalNavBar.css'
import React from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const VerticalNavBar = () =>{
    
 return(
      <div className="sidebar-container">
        
          <ul className="elements">
            <li><FavoriteBorderIcon/></li>
            <li><MessageIcon/></li>
            <li>
              <SettingsIcon/>
            </li>
            <li>
              <PermIdentityIcon/>
            </li>
          </ul>
      </div>
    
    )
  }

  export default VerticalNavBar;