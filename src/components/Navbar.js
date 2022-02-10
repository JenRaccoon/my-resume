import React, { useState } from 'react';
import {
    AppBar, Toolbar, ListItem, IconButton, ListItemIcon, ListItemText, Avatar, Divider, List, Typography, Box
} from '@material-ui/core';
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import avartar from '../avatar.jpg';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import DehazeIcon from '@material-ui/icons/Dehaze';

const useStyles = makeStyles(theme => ({
    menuSliderContainr: {
        width: 250,
        background: '#18453b',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: '#fdb913'
    },
    download: {
        textDecoration: 'none',
        color: '#fdb913'
    }
}))

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home',
        listPath: '/'
    }, {
        listIcon: <AssignmentInd />,
        listText: 'Experience',
        listPath: '/experience'

    }, {
        listIcon: <Apps />,
        listText: 'Skill',
        listPath: '/skill'
    },
]
const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open });
    })

    const classes = useStyles();
    const sideList = slider => (
        <Box
            className={classes.menuSliderContainr}
            comopent='div'
            onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avartar} alt='Jen' />
            <Divider />
            <List>
                {menuItems.map((li, idx) =>
                    <ListItem button key={idx} component={Link} to={li.listPath}>
                        <ListItemIcon className={classes.listItem}>{li.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={li.listText} />
                    </ListItem>
                )}
                <ListItem button to='./English_Resume.pdf'>
                    <ListItemIcon className={classes.listItem}>
                        <ContactMail />
                    </ListItemIcon>
                    <ListItemText primary={<Link className={classes.download} to="/English_Resume.pdf" target="_blank" download>Resume</Link>} />

                </ListItem>
            </List>
        </Box>)

    return (
        <>
            <Box comopent='nav'>
                <AppBar position='static' style={{ background: '#222' }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                            <DehazeIcon style={{ color: '#fdb913' }} />
                        </IconButton>
                        <Typography variant='h5' style={{ color: '#fdb913' }}>About Me</Typography>
                        <MobileRightMenuSlider
                            anchor='right'
                            open={state.right}
                            onClose={toggleSlider('right', false)}>
                            {sideList('right')}
                            <Footer />
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;
