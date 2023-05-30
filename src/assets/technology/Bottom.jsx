import { Divider, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Capsule from "./image-space-capsule-portrait.jpg"
import Space from "./image-spaceport-portrait.jpg"
import Vehicle from "./image-launch-vehicle-portrait.jpg"
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BottomUtil from './BottomUtil'
import "./Tab.css"
import CapsuleLand from "./image-space-capsule-landscape.jpg"
import SpaceLand from "./image-spaceport-landscape.jpg"
import VehicleLand from "./image-launch-vehicle-landscape.jpg"

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Bottom = () => {
    //var matches=useMediaQuery('(max-width:900px)');
    const [matches, setMatches] = React.useState(useMediaQuery('(max-width:900px)'));
    const handleResize = () => {
        if (window.innerWidth < 900) {
            setMatches(true);
            if(value==0){
                setImg(CapsuleLand)
            }
            if(value==1){
                setImg(SpaceLand)
            }
            if(value==2){
                setImg(VehicleLand)
            }
        
        }
        else {
            setMatches(false);
            if(value==0){
                setImg(Capsule)
            }
            if(value==1){
                setImg(Space)
            }
            if(value==2){
                setImg(Vehicle)
            }
        }
    }
    
    useEffect(() => {
        console.log(window.innerWidth, "width")
        handleResize();
       
    }, [window.innerWidth])
    const [value, setValue] = React.useState(0);
    const [img, setImg] = React.useState(Capsule);
    const handleChange = (event, newValue) => {
        if(matches==true){
            setValue(newValue);
            if (newValue == 0) {
                setImg(CapsuleLand);
            }
            else if (newValue == 1) {
                setImg(SpaceLand);
            }
            else if (newValue == 2) {
                
                setImg(VehicleLand);
            }
    }
    else{
        setValue(newValue);
        if (newValue == 0) {
            setImg(Capsule);
        }
        else if (newValue == 1) {
            setImg(Space);
        }
        else if (newValue == 2) {
            
            setImg(Vehicle);
        }

    }
        
    };
    return (
        <Grid container sx={{ minHeight: "90%", display: "flex", flexDirection: "row-reverse", mt: 10, justifyContent: "space-around" }}>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>{matches==true?<img src={img} alt="image"  height={"auto"}  width={"100%"}></img> :<img src={img} height="70%%" width="70%"></img>}</Grid>
            <Grid item xs={12} md={6} sx={{pl:{xs:0,sm:5,md:10},display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"center",columnGap:4,mY:1,pb:4,pt:4}}>
                <Box sx={{justifySelf:"flex-end",maxWidth:{xs:"100%",md:"30%"},pl:2}}  >
                    <Tabs orientation={matches?'horizontal':'vertical'} centered={matches?true:false} value={value} onChange={handleChange} indicatorColor="common.white" textColor="white" sx={{
                        ".MuiTab-root": { display:"block",pt:2,borderRadius:"50px",margin:{xs:2,sm:4,md:3},
                        
                    },
                   
                 
                     
                         
                        '.MuiTabs-indicator': {

                            display:"none"
                        },
                        ".Mui-selected": {
                            backgroundColor: "white",
                            color: "white",
                            opacity: "1",
                         },
    
                       
                    }} >
                        <Tab disableRipple={true} component="div" label="1" {...a11yProps(0)} />
                        <Tab disableRipple={true} component="div" label="2" {...a11yProps(1)} />
                        <Tab disableRipple={true} component="div" label="3" {...a11yProps(2)} />
            
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <BottomUtil head={"Space Capsule"} body={" A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. "} title={"The Terminology..."} ></BottomUtil>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <BottomUtil head={"Spaceport"} body={" A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."} title={"The Terminology..."}></BottomUtil>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <BottomUtil head={"Launch Vehicle"} body={"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"} title={"The Terminology..."} ></BottomUtil>
                </TabPanel>
                
            </Grid>

        </Grid >
    )
}

export default Bottom