import React, { Component, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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

function MainPage() {
  const classes = useStyles();
  const [instrList, setInstrList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/instr")
      .then(response => response.json())
      .then(instrList => {
        setInstrList(instrList);
        console.log(instrList);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Main</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        {loading
          ? null
          : instrList.map(elem => (
              <Grid item xs>
                <Paper className={classes.paper}>{elem.text}</Paper>
              </Grid>
            ))}
      </Grid>
    </div>
  );
}

export default MainPage;