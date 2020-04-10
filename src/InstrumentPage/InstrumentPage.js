import React, { Component, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Routes} from '../routes';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    image: {
        width: 400,
        height: 400,
    },
}));

function InstrumentPage(props) {
    const classes = useStyles();
    const [instrument, setInstrument] = useState({});
    const [loading, setLoading] = useState(true);

    /*useEffect(() => {
        fetch(Routes.Instrument + props.match.id)
            .then(response => response.json())
            .then(instrument => {
                setInstrument(instrument);
                console.log(instrument);
                setLoading(false);
            });
    }, []);*/

    return (
        <div className="container">
            <h1>Инструмент {props.match.params.id}</h1>
            <img className={classes.image} src={require('../placeholder.png')}/>
        </div>
    );
}

export default InstrumentPage;