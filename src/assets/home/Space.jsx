import { Typography,Box } from '@mui/material'
import React from 'react'

const Space = () => {
  return (
    <Box style={{minHeight:"95%",color:"white",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center"}}>
        <div><Typography variant="body2" sx={{fontSize:"1.8rem",opacity:0.8,textAlign:"left"}} >So, you want to travel to</Typography></div>
        <div><Typography variant="h1" sx={{fontSize:"8rem",pt:0,fontWeight:300}}>Space</Typography></div>
        <div><Typography variant="body2" sx={{textAlign:"center",fontSize:"1.2rem",opacity:"0.8",paddingX:4,pt:2}}>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well- sit back, and relax 
  because we’ll give you a truly out of this world experience!</Typography></div>
    </Box>
  )
}

export default Space