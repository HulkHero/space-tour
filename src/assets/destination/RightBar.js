import { Divider, Grid } from '@mui/material'
import React from 'react'
import Mars from "./image-mars.png"
import Europa from "./image-europa.png"
import Moon from "./image-moon.png"
import Titan from "./image-titan.png"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RightBarUtil from './RightBarUtil'
import useMediaQuery from '@mui/material/useMediaQuery';
const styles = (theme) => ({
    root: {
        backgroundColor: 'blue',
        // Match [md, ∞)
        //       [900px, ∞)
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'red',
        },
    },
});
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


const RightBar = () => {
    const matches = useMediaQuery('(max-width:900px)');
    const [value, setValue] = React.useState(0);
    const [img, setImg] = React.useState(Mars);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue == 0) {
            setImg(Mars);
        }
        else if (newValue == 1) {
            setImg(Moon);
        }
        else if (newValue == 2) {
            setImg(Titan);
        }
        else if (newValue == 3) {
            setImg(Europa);
        }

    };
    return (
        <Grid container sx={{ minHeight: "90%", display: "flex", flexDirection: "row", mt: 5, justifyContent: "space-around" }}>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}><img src={img} alt="image" height={"300px"} width={"300px"}></img> </Grid>
            <Grid item xs={12} md={6} sx={{ marginY: 5 }}>
                <Box >
                    <Tabs value={value} onChange={handleChange} centered={matches ? true : false} indicatorColor="common.white" textColor="white" sx={{
                        ".MuiTab-root": { color: "white", opacity: "0.8" },
                        '.MuiTabs-indicator': {
                            color: '#FFFF',
                            backgroundColor: '#FFFF',
                            textColor: '#FFFF',
                            zIndex: 10000000,
                            opacity: "0.8"
                        }
                    }} >
                        <Tab disableRipple={true} label="Mars" {...a11yProps(0)} />
                        <Tab disableRipple={true} label="Moon" {...a11yProps(1)} />
                        <Tab disableRipple={true} label="Titan" {...a11yProps(2)} />
                        <Tab disableRipple={true} label="Eurpia" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <RightBarUtil head={"MARS"} body={" Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! "} distance={"225 MIL. KM "} time={"9 MONTHS"} ></RightBarUtil>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <RightBarUtil head={"MOON"} body={" See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."} distance={"384,400 KM "} time={"3 Days "} ></RightBarUtil>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <RightBarUtil head={"TITAN"} body={"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn. "} distance={"1.6 BIL. KM "} time={"7 YEARS "} ></RightBarUtil>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <RightBarUtil head={"EUROPA"} body={"  The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."} distance={"628 MIL. KM "} time={"3 YEARS "} ></RightBarUtil>
                </TabPanel>
            </Grid>
        </Grid >
    )
}

export default RightBar