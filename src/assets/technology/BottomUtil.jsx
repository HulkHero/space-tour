import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
const BottomUtil = (props) => {

  return (
    <Box sx={{ width: "95%",mt:2,px:{xs:"2.5%",sm:"0"}}}>
                        <Typography sx={{fontSize:"1.5rem",color:"white",display:"block",opacity:"0.8", letterSpacing:2,fontWeight:"300", textAlign: {xs:"center",sm:"left"}}}>{props.title}</Typography>
                        <Typography sx={{ fontSize: "4rem", color: "white", display: "block", fontWeight: 400, textAlign: {xs:"center",sm:"left"} }} > {props.head} </Typography>
                        <Typography variant="body2" sx={{ fontSize: "1.2rem", textAlign: {xs:"center",sm:"left"}, color: "white", opacity: 0.8, textOverflow: "hidden", letterSpacing: 1 }} >{props.body}</Typography>
                    </Box>
  )
}

export default BottomUtil