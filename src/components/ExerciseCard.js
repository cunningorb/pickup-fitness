import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Stack direction="row">
            <Button sx={{ 
                ml: '21px', 
                color: '#FFF', 
                background: '#FFA9A9',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize'
                }}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ 
                ml: '21px', 
                color: '#FFF', 
                background: '#FFA9A9',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize'
                }}>
                {exercise.targetMuscle}
            </Button>
        </Stack>
    </Link>
  )
}

export default ExerciseCard