import React, { useEffect, useState } from 'react'
import { Box, Typography, Stack } from '@mui/material';
import { fetchWgerCategories } from '../utils/fetchData';

const TestApi = () => {
      
    
    return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
        <Typography variant="h4" >
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>What have we here</span>
        </Typography>
        <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
            { }
        </Stack>
    </Box>
  )
}

export default TestApi