import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';import FavoriteIcon from '@mui/icons-material/Favorite';
import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';
import PagesSharpIcon from '@mui/icons-material/PagesSharp';
import VolunteerActivismSharpIcon from '@mui/icons-material/VolunteerActivismSharp';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import { Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';


 function Nav2() {
  const [value, setValue] = React.useState(0);
//   const route = Route();
    const History= useHistory()
  return (


    <Box style= {{margin:"auto"}}>
      <BottomNavigation
        showLabels={true}
        sx= {{ width: "100%", postion: "absolute", bottom:0}}        
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
        label="Home" 
        value= {value}
        onClick={()=>(History.push('/Home'))}
        icon={<EmojiObjectsIcon />} />
        

        <BottomNavigationAction 
        label="Trending" 
        value= {value}
        onClick={()=>(History.push('/Trending'))}       
        icon={<TrendingUpSharpIcon />} />

        <BottomNavigationAction 
        label="Post" 
        value= {value}
        onClick={()=>(History.push('/Post'))}          
        icon={<PagesSharpIcon />} />

        <BottomNavigationAction 
        label="Donations" 
        value= {value}
        onClick={()=>(History.push('/Donations'))}  
        icon={<VolunteerActivismSharpIcon />} />

        <BottomNavigationAction 
        label="Subscriptions"       
        value= {value}
        onClick={()=>(History.push('/Subscriptions'))}          
        icon={<CurrencyExchangeSharpIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default Nav2;