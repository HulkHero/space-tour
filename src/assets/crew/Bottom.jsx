import { Divider, Grid } from '@mui/material'
import React from 'react'
import Ansari from "./image-anousheh-ansari.png"
import Hurley from "./image-douglas-hurley.png"
import Mark from "./image-mark-shuttleworth.png"
import Victor from "./image-victor-glover.png"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RightBarUtil from './RightBarUtil'
import "./tab.css"
import useMediaQuery from '@mui/material/useMediaQuery';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    console.log(children, "children");
    console.log(value, "value");
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
    const matches=useMediaQuery('(max-width:600px)');
    const [value, setValue] = React.useState(0);
    const [img, setImg] = React.useState(Ansari);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue == 0) {
            setImg(Ansari);
        }
        else if (newValue == 1) {
            setImg(Mark);
        }
        else if (newValue == 2) {
            setImg(Victor);
        }
        else if (newValue == 3) {
            setImg(Hurley);
        }

    };
    return (
        <Grid container sx={{ minHeight: "90%", display: "flex", flexDirection: "row-reverse", mt: 5, justifyContent: "space-around" }}>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "flex-end",height:{xs:"400px",sm:"auto" }}}><img src={img} alt="image" height={"400px"}  width={"70%"}></img> </Grid>
            <Grid item xs={12} md={6} sx={{pl:{xs:0,sm:5,md:14},display:"flex",flexDirection:{xs:"column",md:"column-reverse"},justifyContent:"center",pb:2}}>
                <Box sx={{justifySelf:"flex-end",mt:5}}  >
                    <Tabs  centered={matches?true:false} value={value} onChange={handleChange} indicatorColor="common.white" textColor="white" sx={{
                        ".MuiTab-root": { display:"block",color:"black",pt:2,borderRadius:"50px",maxHeight:"2px",maxWidth:"2px",mt:5,
                        
                    },
                    
                    ".Mui-selected": {
                        backgroundColor: "white",
                        color: "white",
                        opacity: "1",
                     },

                     
                         
                        '.MuiTabs-indicator': {
                            color: '#FFFF',
                            backgroundColor: '#FFFF',
                            textColor: '#FFFF',
                            zIndex: 10000000,
                            opacity: "0.8",
                            display:"none"
                        },
                       
                    }} >
                        <Tab disableRipple={true} component="span"  {...a11yProps(0)} />
                        <Tab disableRipple={true} component="span"  {...a11yProps(1)} />
                        <Tab disableRipple={true} component="span"  {...a11yProps(2)} />
                        <Tab disableRipple={true} component="span"  {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <RightBarUtil head={"Anousheh Ansari"} body={"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "} title={"Flight Engineer"} ></RightBarUtil>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <RightBarUtil head={"Douglas Hurley"} body={"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."} title={"Commander"}></RightBarUtil>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <RightBarUtil head={"Mark Shutleworth"} body={"  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."} title={"Mission Specialist"} ></RightBarUtil>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <RightBarUtil head={"Victor Glover"} body={"  Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "} title={"Pilot"}></RightBarUtil>
                </TabPanel>
            </Grid>

        </Grid >
    )
}

export default Bottom