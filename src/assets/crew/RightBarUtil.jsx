import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
const RightBarUtil = (props) => {

  return (
    <Box sx={{ width: "95%",pl:"2.5%",pr:"2.5%",minHeight:"370px" }}>
                        <Typography sx={{fontSize:"2rem",color:"white",display:"block",textAlign:{xs:"center",sm:"left"},opacity:"0.8", letterSpacing:2,fontWeight:"300"}}>{props.title}</Typography>
                        <Typography sx={{ fontSize: "4rem", color: "white",textAlign:{xs:"center",sm:"left"} ,display: "block", fontWeight: 400 }} > {props.head} </Typography>
                        <Typography variant="body2" sx={{ fontSize: "1.2rem", textAlign:{xs:"center",sm:"left"}, color: "white", opacity: 0.8, textOverflow: "hidden", letterSpacing: 1 }} >{props.body}</Typography>
                    </Box>
  )
}

export default RightBarUtil