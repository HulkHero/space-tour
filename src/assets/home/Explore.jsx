import { Typography,Box } from '@mui/material'
import React from 'react'

const Explore = () => {
  return (
    <Box sx={{minHeight:"95%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:{xs:"center",md:"flex-end"}}}>
    <div style={{ width: "270px",
        height: "270px",
        borderRadius: "50%",
        backgroundColor: "white",
        textAlign: "center",lineHeight:"270px"}}><Typography variant="body2" sx={{fontSize:"2rem",lineHeight:"270px  "}}>Explore</Typography></div>
        </Box>
  )
}

export default Explore