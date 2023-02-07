import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';
import PagesSharpIcon from '@mui/icons-material/PagesSharp';
import VolunteerActivismSharpIcon from '@mui/icons-material/VolunteerActivismSharp';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
 function Nav2() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Innovation" icon={<EmojiObjectsIcon />} />
        <BottomNavigationAction label="Trending" icon={<TrendingUpSharpIcon />} />
        <BottomNavigationAction label="Post" icon={<PagesSharpIcon />} />
        <BottomNavigationAction label="Donations" icon={<VolunteerActivismSharpIcon />} />
        <BottomNavigationAction label="Subscriptions" icon={<CurrencyExchangeSharpIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default Nav2;