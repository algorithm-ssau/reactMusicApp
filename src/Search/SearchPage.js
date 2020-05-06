import React, {Component, useState, useEffect, useContext} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import UserContext from "../UserContext";
import InstrumentCard from "../InstrumentCard/instrumentCard";
import {Routes} from "../routes";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    }
}));

function SearchPage() {
    const {searchData} = useContext(UserContext);

    return (
        <div className="container">
            <h1>Результат поиска</h1>
            <Grid container spacing={2}>
                {searchData.length > 0 ? searchData.map(elem => (
                        <Grid item xs={6}>
                            {/*<Paper className={classes.paper}>{elem.text}</Paper>*/}
                            <InstrumentCard instrument={elem}/>
                        </Grid>
                    )) : <p>По вашему запросу ничего не найдено</p>}
            </Grid>
        </div>
    );
}

export default SearchPage;