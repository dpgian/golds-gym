import React from 'react'
import { Typography, Box, Stack } from '@mui/material'
import Loader from './Loader'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if(!exerciseVideos.length) return <Loader />
  console.log(exerciseVideos)

  return (
    <Box sx={{ marginTop: { xs: '20px'}}} padding='20px'>
      <Typography variant='h3' mb='33px'>
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{` ${name} `}</span> exercise videos
      </Typography>
      <Stack 
        justifyContent='center' 
        flexWrap='wrap' 
        alignItems='center' 
        sx={{ flexDirection: { lg: 'row', md: 'row' }, 
              gap: { lg: '110px', xs: '10px', md: '55px'}}}
      >
          {exerciseVideos?.slice(0, 3).map((video, index) => (
            <a
              key={index}
              className='exercise-video'
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target='_blank'
              rel='noreferrer'
            >
              <img src={video.video.thumbnails[0].url} alt={video.video.title} />
              <Box>
                <Typography variant='h5' color='#000'>
                  {video.video.title}
                </Typography>
                <Typography variant='h7' color='#000'>
                  {video.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}

      </Stack>
    </Box>
  )
}

export default ExerciseVideos