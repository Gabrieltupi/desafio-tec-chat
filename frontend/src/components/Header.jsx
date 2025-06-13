import React from 'react';
import {AppBar, Toolbar, Typography, Box} from '@mui/material';
import HeaderMenu from './HeaderMenu';
import { getMessages} from '../services/api';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{flexGrow: 1}}>
        ChatBot
      </Typography>

      <Box>
        <HeaderMenu fetchMessages={getMessages} />
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
