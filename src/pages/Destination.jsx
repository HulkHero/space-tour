import React from 'react'
import { Grid, styled } from '@mui/material'
import imagePc from '../assets/destination/background-destination-desktop.jpg';
import imageTab from '../assets/destination/background-destination-tablet.jpg'
import imageMob from '../assets/destination/background-destination-mobile.jpg'
import LeftBar from '../assets/destination/LeftBar';
import RightBar from '../assets/destination/RightBar';
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
// top
//bottom
const Destination = () => {
  return (
    <Background>
      <Grid container rowGap={0} sx={{minHeight:"80vh",display:"flex",justifyContent:"center"}} >
           <Grid xs={12} md={12} item  sx={{height:{xs:"25vh", md:"25vh"},position:"relative",}}><LeftBar></LeftBar></Grid>
           <Grid xs={12} md={12} item sx={{height:{xs:"100%", md:"70vh"},position:"relative",display:"flex",justifyContent:"center"}}><RightBar></RightBar></Grid>

      </Grid>
        
    </Background>
    
  )
}

export default Destination