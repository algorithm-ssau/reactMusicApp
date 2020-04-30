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
    const {user} = useContext(UserContext);

    useEffect(() => {
        fetch(Routes.Instrument + props.match.params.id)
            .then(response => response.json())
            .then(instrument => {
                setInstrument(instrument);
                console.log(instrument);
                setLoading(false);
            });
    }, []);

    const addToWishlist = (event) => {
        event.preventDefault();
        const data = {
            username: user.username,
            instrument: instrument._id
        };
        let response = fetch(Routes.AddToWishlist,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.ok) alert("instrument added to wishlist")
    }

    return (
        <div className="container">
            <Grid className={'bg-white border border-primary'} container spacing={3}>
                {loading ? null : <React.Fragment>
                    <Grid item xs={7}>
                        <img className={classes.image} src={require('../placeholder.png')}/>
                    </Grid>
                    <Grid item xs={5}>
                        <h6>{instrument.species}</h6>
                        <h1>{instrument.name}</h1>
                        <h2>{instrument.price}</h2>
                        <p>{instrument.description}</p>
                        {
                            user.username ?
                                (<Button variant="contained" color="primary" onClick={addToWishlist}>
                                В КОРЗИНУ
                            </Button>) :
                                (
                                    <p className={"text-danger"}>Вы должны войти в аккаунт, чтобы иметь возможность совершить покупку</p>
                                )
                        }
                    </Grid>
                </React.Fragment>}
            </Grid>
        </div>
    );
}

export default InstrumentPage;