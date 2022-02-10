import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Particles from "react-tsparticles";
import { makeStyles } from '@material-ui/core/styles';
import Pfive from '../sketch/Pfive';

const useStyles = makeStyles(theme => ({
    particlesCanvas: {
        position: 'absolute',
        opacity: 0.3
    }
}))
export const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <Header />
            <Pfive />
            <Particles
                canvasClassName={classes.particlesCanvas}
                options={{
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                    },
                    particles: {
                        number: {
                            value: 45,
                            density: false,
                            value_area: 900
                        },
                        color: {
                            value: "#fff12f",
                        },
                        links: {
                            color: '#ffffff',
                            distance: 200,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true,
                            }
                        },
                        shape: {
                            type: "circle",

                        },
                        size: {
                            random: true,
                            value: 5,
                            anim: {
                                enable: true,
                                speed: 8,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                    },
                    detectRetina: true,
                }} />

        </div>
    );
};
