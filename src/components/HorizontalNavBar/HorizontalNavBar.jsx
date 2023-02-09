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


function HorizontalNavBar() {
    const [value, setValue] = React.useState(0);
    const History= useHistory()
    const theme = useTheme();
    
    console.log(theme);

      return (
  
<>
      <Box>
    
      <Box>
        <BottomNavigation
          showLabels={true}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
            
          <Box 
          sx={{backgroundColor:"White", 
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", 
          height:"100vh", 
          width:100}}
          >
             

           <Stack direction="column" alignItem= {"center"} sx={{width:"100%"}} > 
          <Box 
            sx= {{
            backgroundColor: "White",
            height: 64,
            width: 64,
            borderRadius: 1.5
          }} >
            <h1> top of box</h1>
          </Box>
          </Stack>

          </Box>
        
          <Box> 

          <BottomNavigationAction className='1'
          sx= {{height:"100vh", width: "100"}}
          value= {value}
          onClick={()=>(History.push('/'))}
          icon={<FavoriteBorderSharpIcon />} />
           </Box>
           
        <Box> 
          <BottomNavigationAction 
          sx= {{height:"100vh", width: "100"}}
          value= {value}
          onClick={()=>(History.push('/'))}       
          icon={<ChatOutlinedIcon />} />
        </Box>

        <Box> 
          <BottomNavigationAction 
          sx= {{height:"100vh", width: "100"}}          
          value= {value}
          onClick={()=>(History.push('/'))}          
          icon={<SettingsOutlinedIcon />} />
        </Box>
        
        <Box> 
          <BottomNavigationAction 
          sx= {{height:"100vh", width: "100"}}
          value= {value}
          onClick={()=>(History.push('/profile'))}  
          icon={<PermIdentityOutlinedIcon />} />
        </Box>
          
        </BottomNavigation>
        </Box>
      </Box>
      
      </>
    );
  }

  export default HorizontalNavBar;