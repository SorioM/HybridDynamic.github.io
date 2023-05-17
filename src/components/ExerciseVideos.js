import React from 'react'
import { Box, Stack, Typography } from '@mui/material';


const ExerciseVideos = ( {exerciseVideos, name}) => {

if(!exerciseVideos.length) return 'Loading...';


  return (
    <Box sx={{ marginTop: { lg:'170px', xs:'20px' }}} p='20px' backgroundColor='#F5F5F5' > 
      <Typography mt='30px' textAlign='center' marginBottom='80px' color='#090909' fontSize='25px' fontWeight='bold'>
        Watch <span style={{color: '#FC4F00', textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' marginLeft='25px'
      sx={{
        flexDirection: { lg: 'row'},
        gap: { lg: '50px', xs: '30px'}
      }}
      >  
        {exerciseVideos?.slice(0, 9).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
            <Box>
              <Typography variant='h7' color='#090909' p='10px 15px'>
                {item.video.title}
              </Typography>
              <Typography fontSize='15px' color='grey' p='10px 15px'>
                {item.video.channelName}
              </Typography>
            </Box>

          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos