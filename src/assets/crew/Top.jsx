import { Typography, Box } from '@mui/material'
import React from 'react'

const Bottom = () => {
    return (
        <Box sx={{  minHeight: "99%", display: "flex", justifyContent: { xs: "center", sm: "left" }, alignItems: "flex-end", pl: { xs: 0, sm: 5, md: 15 } }}>
            <Typography sx={{ fontSize: "1.5rem", color: "white", display: "block", opacity: "0.6" }} > 02  </Typography>
            <Typography sx={{ fontSize: "1.5rem", pl: 2, color: "white", display: "block", letterSpacing: 3, opacity: "0.9" }}>Space launch 101</Typography>
        </Box>
    )
}
export default Bottom