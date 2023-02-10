import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';import PagesSharpIcon from '@mui/icons-material/PagesSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';import { Route } from "react-router-dom";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useHistory } from 'react-router-dom';
import { Stack } from '@mui/system';
import { useTheme } from '@emotion/react';

import Logo from "../../Assets/Images/logo.ico"
const HorizontalNavBar = () =>{
    
  const theme = useTheme()
  console.log(theme);

      return (
  <>
  <Box 
  sx={{ 
    display:'flex',
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", 
    height: "100vh", 
    width: 100}} >
      
      <Stack direction="column" alignItems={"center"} sx={{width: "100"}}>
      <Box sx={{
        height: 64,
        width: 64,
        borderRadius: 1.5
      }}>
        <img src={Logo} />
      </Box>
      </Stack>
      
  </Box>
  </>   
    
    );
  }

  export default HorizontalNavBar;