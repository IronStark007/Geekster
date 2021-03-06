import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/"><Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Article
          </Typography></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
