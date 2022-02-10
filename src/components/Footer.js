import React from 'react';
import {
    BottomNavigation, BottomNavigationAction
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            maxWidth: 250
        },
        '& .MuiSvgIcon-root': {
            fill: '#fdb913',
            '&:hover': {
                fill: '#16997c',
                fontSize: '1.8rem'
            }
        }
    },
}))
const Footer = () => {
    const classes = useStyles();

    return (
        <BottomNavigation width='auto' style={{ background: '#222' }}>

            <BottomNavigationAction className={classes.root}
                style={{ padding: 0 }}
                icon={<a href='https://www.linkedin.com/in/jen-hsieh-1a84211b7/' target="_blank"><LinkedInIcon /></a>}
            >

            </BottomNavigationAction>
            <BottomNavigationAction className={classes.root}
                style={{ padding: 0 }}
                icon={<a href='https://github.com/JenRaccoon' target="_blank"><GitHubIcon /></a>}>
            </BottomNavigationAction>
            <BottomNavigationAction className={classes.root}
                style={{ padding: 0 }}
                icon={<a href='https://ithelp.ithome.com.tw/users/20141729/profile' target="_blank"><MenuBookIcon /></a>}>
            </BottomNavigationAction>
        </BottomNavigation>
    )
}

export default Footer;