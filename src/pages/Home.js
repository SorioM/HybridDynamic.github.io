import React, { useState } from 'react';
import { Box } from '@mui/material';


import HeroBanner from '../components/HeroBanner';
import HomeContent from '../components/HomeContent';



const Home = () => {
  return(
    <Box>
        <HeroBanner />
        <HomeContent />
    </Box>
  )
}

export default Home