// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Grid } from '@mui/material';
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div className='header' spacing={2}>
      <Grid>
        <Grid item xs={12}>
          <div>
            <h1>Call a Friend</h1>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            <h5>Your friendly contact app</h5>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;