import React from 'react'
import { Grid, styled } from '@mui/material'
import imagePc from '../assets/home/background-home-desktop.jpg';
import imageTab from '../assets/home/background-home-tablet.jpg'
import imageMob from '../assets/home/background-home-mobile.jpg'
import Space from '../assets/home/Space';
import Explore from '../assets/home/Explore';
const Background = styled('div')(({ theme }) => ({
   position:"absolute",
   top:0,
   left:0,
    backgroundImage:`url(${imagePc})`,
    backgroundSize: 'cover',
   // backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '105%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        backgroundImage:`url(${imageTab})`,
    },
    [theme.breakpoints.down('sm')]: {
        backgroundImage:`url(${imageMob})`,
    }

}))

const Home = () => {
  return (
    <Background>
      <Grid container rowGap={0} sx={{minHeight:"90vh",}} >
           <Grid xs={12} md={6} item  sx={{height:{xs:"75vh", md:"80vh"},position:"relative",mt:5}}><Space></Space></Grid>
           <Grid xs={12} md={6} item sx={{height:{xs:"75vh", md:"80vh"},position:"relative"}}><Explore></Explore></Grid>

      </Grid>
        
    </Background>
    
  )
}

export default Home