import React, {Component, useState, useEffect, useContext} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Card, Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Routes} from '../routes';
import UserContext from "../UserContext";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    whiteContainer: {
        backgroundColor: theme.palette.text.secondary
    },
    image: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    instrumentName: {
        marginBottom: 20,
    },
}));

function InstrumentPage(props) {
    const classes = useStyles();
    const [instrument, setInstrument] = useState({});
    const [loading, setLoading] = useState(true);
    const {cart, setCart} = useContext(UserContext);

    useEffect(() => {
        fetch(Routes.Instrument + props.match.params.id)
            .then(response => response.json())
            .then(instrument => {
                setInstrument(instrument);
                console.log(instrument);
                setLoading(false);
            });
    }, []);

    const add = (event) => {
        event.preventDefault();
        setCart(cart.concat(instrument))
        addToCart(instrument);
        console.log(cart)
    }

    function addToCart(instrument) {
        let instrIndex = cart.findIndex(item => item.instrument._id == instrument._id);
        console.log(instrIndex === -1)
        if (instrIndex === -1) setCart(cart.concat([{instrument: instrument, count: 1}]));

        else setCart(cart.map((item, index) => {
            if(index === instrIndex) item.count++;
            return item;
        }))
    }


    return (
        <div className="container">
            <Grid className={'bg-white border border-warning'} container spacing={3}>
                {loading ? null : <React.Fragment>
                    <Grid item xs={7}>
                        {instrument.image == null ? <img className={classes.image} src={require('../placeholder.png')}/>
                            : <img className={classes.image} src={process.env.PUBLIC_URL + '/img/' + instrument.image}/>}
                    </Grid>
                    <Grid item xs={5}>
                        <h6>{instrument.species}</h6>
                        <h1>{instrument.name}</h1>
                        <h2>{instrument.price}</h2>
                        <p>{instrument.description}</p>
                        <button onClick={add} className="btn btn-warning">
                            В КОРЗИНУ
                        </button>
                    </Grid>
                </React.Fragment>}
            </Grid>
        </div>
    );
}

export default InstrumentPage;