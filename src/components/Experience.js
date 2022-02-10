import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#233",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #fdb913",
            right: "40px",
            top: 0,
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both",
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto",
            },
        },
    },
    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid #7df5da',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:after': {
            content: "''",
            position: 'absolute'
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: 'solid',
            borderColor: '#fdb913 #fdb913 transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up("md")]: {
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)': {
                float: 'right',
                margin: '1rem',
                borderColor: '#fdb913',
            },
            '&:nth-of-type(2n):before': {
                right: 'auto',
                left: "-0.625rem",
                borderColor: 'transparent transparent #fdb913 #fdb913',
            }
        }

    },
    timeLineYear: {
        textAlign: 'center',
        maxWidth: '9.375rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.8rem',
        background: '#fdb913',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before': {
            display: 'none'
        },
        [theme.breakpoints.up("md")]: {
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)': {
                float: 'none',
                margin: '0 auto'
            },
            '&:nth-of-type(2n):before': {
                display: 'none'
            }
        },
    },
    heading: {
        color: '#fdb913',
        padding: '3rem 0',
        textTransform: 'uppercase'
    },
    subHeading: {
        color: 'white',
        padding: '0',
    },
    company: {
        color: '#22c5a0',
        padding: '0',
    },
    description: {
        color: 'tan',
        padding: '0',
    }
}));

const Experience = () => {
    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    WORKING EXPERIENCE
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        Now
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Full Stack Engineer
                        </Typography>
                        <Typography variant="body1" className={classes.company}>
                            Smart Aging Tech Co., Ltd. , Taipei
                        </Typography>
                        <Typography variant="subtitle1" className={classes.description}>
                            - Use NodeJs, Express.js, MongoDB and TypeScript for Backend application with third party API. Use React, Redux, Hooks, and JavaScript/ Html/ CSS for frontend.<br />
                            - Develop and maintain medicine system used by more than 70% customers.<br />
                            - Use Python, Selenium to scrape website for  automated test.<br />
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        Sep 2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Software Engineer Intern
                        </Typography>
                        <Typography variant="body1" className={classes.company}>
                            FORESII Technology Co., Ltd. , Taipei
                        </Typography>
                        <Typography variant="subtitle1" className={classes.description} >
                            - Heavy concentration in Java, JSP / Servlets and front end development. Streamlined processes: Continuously identified, measured, and improved processes.<br />
                            - Designed project requirements in cooperation with data analysis teams.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        Jun 2020
                    </Typography>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        May 2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Pharmacist
                        </Typography>
                        <Typography variant="body1" className={classes.company} >
                            Dr.Victor Clinic, International Pain Management Center, Taipei
                        </Typography>
                        <Typography variant="subtitle1" className={classes.description}>
                            - Designed a standard educational material for clients, as part of providing optimal health care services.<br />
                            - Responsible for full cycle of patient care through strong record-keeping and documentation skills.<br />
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        Jan 2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Pharmacist

                        </Typography>
                        <Typography variant="body1" className={classes.company}>
                            Shengkang Pharmacy, Taipei
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        Sep 2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Bachelor of Science in Pharmacy
                        </Typography>
                        <Typography variant="body1" className={classes.company} >
                            China Medical University , Taichung
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </>
    );
};
export default Experience;

