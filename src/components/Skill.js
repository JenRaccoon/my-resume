import React from 'react';
import {
    Grid, Box, Card, CardActionArea, CardContent, Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import MySQL from '../images/Mysql.png'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import mongodb from '../images/mongodb.png';
import Postgrel from '../images/Postgrel.png';
import Apache from '../images/Apache.png';
import JavaScript from '../images/Javascript.png';
import Java from '../images/Java.png';
import Python from '../images/python.png';
import TypeScript from '../images/TypeScript.png';
import react from '../images/react.png';
import css3 from '../images/css3.png';
import html from '../images/html.png';
import linux from '../images/linux.png';
import express from '../images/express.png';
import node from '../images/node.png';




const useStyles = makeStyles(theme => ({
    mainContainer: {
        height: '100%'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '3rem auto'
    },
    avatar: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },

}))


const Header = () => {

    const classes = useStyles();

    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justifyContent='center' alignItems='center'>
                {/* Front-End */}
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardHeader
                                avatar={
                                    <div className={classes.avatar}>
                                        <Avatar
                                            variant="square" src={react} alt="react" />
                                        <Avatar
                                            variant="square" src={JavaScript} alt="JavaScript" />
                                        <Avatar
                                            variant="square" src={html} alt="html" />
                                        <Avatar
                                            variant="square" src={css3} alt="css3" />

                                    </div>

                                }
                            />
                            <CardContent>
                                <Typography variant='h4' component='p'>
                                    Front-End
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Expertise in front-end technologies, including React, Redux, Hooks, JavaScript, CSS3 and HTML.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
                {/* Development languages */}
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardHeader
                                avatar={
                                    <div className={classes.avatar}>
                                        <Avatar
                                            variant="square" src={JavaScript} alt="JavaScript" />
                                        <Avatar
                                            variant="square" src={Python} alt="Python" />
                                        <Avatar
                                            variant="square" src={Java} alt="Java" />
                                        <Avatar
                                            variant="TypeScript" src={TypeScript} alt="TypeScript" />
                                    </div>

                                }
                            />
                            <CardContent>
                                <Typography variant='h4' component='p'>
                                    Languages
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Knowledge of server-side programming languages including JavaScript, Java, TypeScript and Python.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
                {/* web */}
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardHeader
                                avatar={
                                    <div className={classes.avatar}>
                                        <Avatar
                                            variant="square" src={node} alt="node" />
                                        <Avatar
                                            variant="square" src={express} alt="express" />

                                    </div>

                                }
                            />
                            <CardContent>
                                <Typography variant='h4' component='p'>
                                    Web
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Use NodeJs and Express to develop Backend System and Restful API.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
                {/* Database */}
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardHeader
                                avatar={
                                    <div className={classes.avatar}>
                                        <Avatar
                                            variant="square" src={mongodb} alt="mongodb" />
                                        <Avatar
                                            variant="square" src={MySQL} alt="MySQL" />
                                        <Avatar
                                            variant="square" src={Postgrel} alt="Postgrel" />
                                    </div>

                                }
                            />
                            <CardContent>
                                <Typography variant='h4' component='p'>
                                    Database
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Familiarity with DBMS technology, including MongoDB, MySQL and PostgreSQL and caching mechanisms such as Redis.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
                {/* Server */}
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardHeader
                                avatar={
                                    <div className={classes.avatar}>
                                        <Avatar
                                            variant="square" src={Apache} alt="Apache" />
                                        <Avatar
                                            variant="square" src={linux} alt="linux" />
                                    </div>

                                }

                            />
                            <CardContent>
                                <Typography variant='h4' component='p'>
                                    Server
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Experience using Apache servers with a solid background in Linux.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
            </Grid>



        </Box >
    )
};

export default Header;

