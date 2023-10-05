import React, { useState } from 'react';
import { Box } from '@mui/material';

import ExerciseGenie from '../components/ExercisesGenie';
import FindExercises from '../components/FindExercises';

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
  
    return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <FindExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <ExerciseGenie exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default ExerciseList