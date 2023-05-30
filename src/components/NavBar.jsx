import { AppBar, Toolbar,Button,Box, Divider, Tab,Tabs, IconButton, Drawer, SwipeableDrawer } from '@mui/material'
import React from 'react'
import Logo from '../assets/shared/logo.svg'
import { Link } from 'react-router-dom'
import Hamburger from '../assets/shared/icon-hamburger.svg'
import "./nav.css"
const NavBar = () => {
    const [value, setValue] = React.useState(0);
     const [open, setOpen] = React.useState(false);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleClick=()=>{
      setOpen(!open);
    }
  return (
    <>
    <AppBar  sx={{display:{xs:"none",sm:"flex"} ,position:"absolute",top:25,bgcolor: 'rgb(0,0,0,0)',flexDirection:"row",alignItems:"center",boxShadow:"none"}}>
      
          <Box sx={{flexGrow:"1",m:2}}>
            <img src={Logo} alt="logo" width="40px" height="40px" />
          </Box>
          <div style={{ zIndex:"100000",paddingLeft:"auto",minHeight:4,backgroundColor:"rgb(153,153,153,0.2)" ,minWidth:"100px",flexGrow:"5"}}  ></div>
        <Toolbar sx={{ml:"auto",bgcolor: '#FFFF',flexGrow:"3",marginLeft:-5,paddingY:2,backdropFilter:"20px",
        backdropFilter: "blur(25px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)"   ,
        paddingBottom:"0px"
    }} >
            <Box sx={{display:"flex",justifyContent:"space-around",minWidth:"100%"}}>
            <Tabs value={value} disableRipple={true} onChange={handleChange} indicatorColor="common.black"  textColor="white" sx={{".MuiTab-root":{paddingBottom:4},
                '.MuiTabs-indicator': {
                    //color: '#FFFF',
                    backgroundColor: '#FFFF',
                    // textColor: '#FFFF',
                    zIndex: 10000000,
                    
                }
            }} TabIndicatorProps={{disableRipple:true,sx:{  }}}
           
            >
  <Tab disableRipple={true} component={Link} to="/" label="00 Home" />
  <Tab disableRipple={true} component={Link} to="/destination" label="01 Destination" />
  <Tab disableRipple={true} component={Link} to="/crew" label="02 Crew" />
  <Tab disableRipple={true} component={Link} to="/technology" label="03 Technology" />
</Tabs>
            </Box>
        </Toolbar>
    </AppBar>

<AppBar  sx={{display:{xs:"flex",sm:"none"} ,position:"absolute",top:25,bgcolor: 'rgb(0,0,0,0)',flexDirection:"row",alignItems:"center",boxShadow:"none"}}>
      
<Box sx={{flexGrow:"1",m:2}}>
  <img src={Logo} alt="logo" width="40px" height="40px" />
</Box>
<IconButton sx={{m:2,mb:3}} onClick={()=>{handleClick()}}>
    <img src={Hamburger} alt="logo" width="30px" height="30px" />
  </IconButton>

  <SwipeableDrawer  open={open} anchor="top"  onClose={()=>{handleClick()}}>
    
    <Toolbar >
  
  <Box sx={{display:"flex",justifyContent:"space-around",minWidth:"100%"}}>
  <Tabs value={value} orientation='vertical' disableRipple={true} onChange={handleChange} sx={{mt:2,".MuiTab-root":{color:"white",opacity:1},
      
      ".Mui-selected": {
        color: "white",
        textColor: "white",
        opacity: "1",
     }, 
        '.MuiTabs-indicator': {
            backgroundColor: '#FFFF',
            textColor: '#FFFF',
            zIndex: 10000000,
            opacity: "0.8",
            display:"block"
        },
  }}
  >
<Tab disableRipple={true} component={Link} to="/" label="00 Home" />
<Tab disableRipple={true} component={Link} to="/destination" label="01 Destination" />
<Tab disableRipple={true} component={Link} to="/crew" label="02 Crew" />
<Tab disableRipple={true} component={Link} to="/technology" label="03 Technology" />
</Tabs>
  </Box>
</Toolbar>
   
  </SwipeableDrawer>

 
</AppBar>
</>
  )
}

export default NavBar