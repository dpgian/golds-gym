import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { xs: '0px', md: '50px'}}}>
      <Typography variant='h3' mb='10px'>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        {
          targetMuscleExercises.length ?
          <HorizontalScrollbar data={targetMuscleExercises} />
          :
          <Loader />
        }
      </Stack>
      <Typography variant='h3' mb='10px' mt='100px'>
        Exercises that use the same equipment
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}>
        {
          equipmentExercises.length ?
          <HorizontalScrollbar data={equipmentExercises} />
          :
          <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises