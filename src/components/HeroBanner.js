import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner_splash.png';

const HeroBanner = () => (
  <Box sx={{ 
    mt: { lg: '25px', xs: '70px' }, 
    ml: { sm: '50px' } }}       
    position="relative" 
    p="20px">
    <Typography fontWeight={600} color="#FF2625" sx={{  opacity: '0.1', display: { xl: 'block', lg: 'none', md: 'none', sm: 'none', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Find your fit</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      You'll thank <br />
      yourself
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective <br /> exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} m="40px 0" textAlign="left">
        Awesome Exercises You <br /> Should Know
      </Typography>
  </Box>
);

export default HeroBanner;