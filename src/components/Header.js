import React from 'react';
import {
    Typography,
    Box
} from '@material-ui/core';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: theme.spacing(1),
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
    title: {
        color: '#fddc50'
    },
    subtitle: {
        color: '#22c5a0',
        marginBottom: '3reem'
    },

    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Typography className={classes.title} variant='h4' >
                <Typed strings={[
                    'Hello!', 'I am', 'Jen'
                ]}
                    typeSpeed={40}
                    backSpeed={70}>
                </Typed>
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant='h5' >
                <Typed
                    strings={[
                        'Motivated Self-starter', 'Determined Fast Learner', 'Approachable Team Player', 'Full Stack Engineer',
                    ]}
                    typeSpeed={40}
                    backSpeed={70}></Typed>
            </Typography>
        </Box >
    )
};

export default Header;