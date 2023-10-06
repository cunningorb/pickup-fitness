import React, { useState } from 'react';
import { Box } from '@mui/material';

import TestApi from '../components/TestApi';

const Test = () => {
    const [exercises, setExercises] = useState([]);
    return (
    <Box>
        <TestApi exercises={exercises} setExercises={setExercises} />
    </Box>
  );
};

export default Test;