import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
const RightBarUtil = (props) => {

  return (
    <Box sx={{ width: "95%",px:{xs:"2.5%",sm:"0"}}}>
                        <Typography sx={{ fontSize: "5rem", color: "white", display: "block", fontWeight: 400,textAlign: {xs:"center",md:"left"} }} > {props.head} </Typography>
                        <Typography variant="body2" sx={{ fontSize: "1.2rem", textAlign: {xs:"center",md:"left"}, color: "white", opacity: 0.8, textOverflow: "hidden", letterSpacing: 1 }} >{props.body}</Typography>

                        <Divider sx={{ bgcolor: "white", opacity: 0.8, mt: 5, mb: 5 }} />
                        <Box sx={{ display: "flex", flexDirection: {xs:"column",md:"row"},columnGap:5,rowGap:5,alignItems:"center" }}>
                            <Box sx={{}}>
                                <Typography sx={{ fontSize: "1rem", textAlign: "left", color: "white", opacity: 0.8, }} > AVG.DISTANCE</Typography>
                                <Typography sx={{ fontSize: "1.5rem", textAlign: "left", color: "white", opacity: 0.8, fontWeight: 400 }} > {props.distance}</Typography>
                            </Box>
                            <Box sx={{  }}>
                                <Typography sx={{ fontSize: "1rem", textAlign: "left", color: "white", opacity: 0.8, }} > EST. TRAVEL TIME</Typography>
                                <Typography sx={{ fontSize: "1.5rem", textAlign: "left", color: "white", opacity: 0.8, fontWeight: 400 }} > {props.time}</Typography>
                            </Box>
                        </Box>
                    </Box>
  )
}

export default RightBarUtil