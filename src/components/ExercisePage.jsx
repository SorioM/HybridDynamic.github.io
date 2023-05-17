import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchExercises from './SearchExercises';
import Exercises from './Exercises';

const ExercisePage = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  return (
    <Box style={{ marginTop:'6rem'}}>
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
        />
        <Exercises 
        setExercises={setExercises} 
        exercises={exercises}
        bodyPart={bodyPart} 
  />
    </Box>
  )
}

export default ExercisePage