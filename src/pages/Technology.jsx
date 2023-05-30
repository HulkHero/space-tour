import React from 'react'
import { Grid, styled } from '@mui/material'
import imagePc from '../assets/technology/background-technology-desktop.jpg';
import imageTab from '../assets/technology/background-technology-tablet.jpg'
import imageMob from '../assets/technology/background-technology-mobile.jpg'
import Top from "../assets/technology/Top"
import Bottom from "../assets/technology/Bottom"
const Background = styled('div')(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    backgroundImage: `url(${imagePc})`,
    backgroundSize: 'cover',
    // backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '104%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        backgroundImage: `url(${imageTab})`,
    },
    [theme.breakpoints.down('sm')]: {
        backgroundImage: `url(${imageMob})`,
    }

}))

const Crew = () => {
    return (
        <Background>
            <Grid container rowGap={0} sx={{ minHeight: "80vh", display: "flex", justifyContent: "center" }} >
                <Grid xs={12} md={12} item sx={{ height: { xs: "25vh", md: "25vh" }, position: "relative", }}><Top></Top></Grid>
                <Grid xs={12} md={12} item sx={{ height: { xs: "100%", md: "100%" }, position: "relative", display: "flex", justifyContent: "center" }}><Bottom></Bottom></Grid>

            </Grid>

        </Background>

    )
}

export default Crew