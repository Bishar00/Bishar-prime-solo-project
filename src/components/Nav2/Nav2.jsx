import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';
import PagesSharpIcon from '@mui/icons-material/PagesSharp';
import VolunteerActivismSharpIcon from '@mui/icons-material/VolunteerActivismSharp';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import { useHistory } from 'react-router-dom';

const Nav2 = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();

  const handleNavigation = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        history.push('/home');
        break;
      case 1:
        history.push('/trending');
        break;
      case 2:
        history.push('/post');
        break;
      case 3:
        history.push('/donations');
        break;
      case 4:
        history.push('/subscriptions');
        break;
      default:
        break;
    }
  };

  return (
    <Box className="footer" sx={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <Box sx={{ flexBasis: '300px' }}>
        {/* Add your sidebar component here */}
      </Box>
      <Box sx={{ flexBasis: '100%',width:'100%' }}>
        <BottomNavigation value={value} onChange={handleNavigation}>
          <BottomNavigationAction label="Home" icon={<EmojiObjectsIcon />} />
          <BottomNavigationAction label="Trending" icon={<TrendingUpSharpIcon />} />
          <BottomNavigationAction label="Post" icon={<PagesSharpIcon />} />
          <BottomNavigationAction label="Donations" icon={<VolunteerActivismSharpIcon />} />
          <BottomNavigationAction label="Subscriptions" icon={<CurrencyExchangeSharpIcon />} />
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export default Nav2;