import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        height: 240,
        width: 300,
        textAlign: 'center',
        padding: theme.spacing(4),
    },
  }));
let theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontWeightMedium: 500,
        h1:{
            fontWeight: '500',
            fontSize: '35px',
            lineHeight: '2',
            textAlign: "center",
        },
        body1:{
            fontSize: '18px',
        },
        overline:{
            fontStyle: 'italic'
        },
        h3:{
            fontSize: '25px',
            fontWeight: '500',
            textAlign: "center",
        },
        h4:{
          fontSize: '20px',
          fontWeight: '500',
        }
        
    },
});
function ContactPage(props) {
  const classes = useStyles();
    const [spacing, setSpacing] = React.useState(5);
    
    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}></div>
        <Typography variant="h1" paragraph>Контакты</Typography>
        <div className="w-100"></div>
        <Typography variant="h3" paragraph>Здравствуйте, здесь вы найдете информацию, благодаря которой вы можете связаться с нами!</Typography>
        <Grid container className={classes.root} >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
              <Grid item>
                <Paper className={classes.paper}>
                < FontAwesomeIcon icon={faPhone} aria-hidden="true" size="3x"/>
                <Typography variant="h4" paragraph>НАШИ ТЕЛЕФОНЫ</Typography>
                <Typography variant="h4">+79172337480</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                < FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true" size="3x"/>
                <Typography variant="h4" paragraph>МЫ ЗДЕСЬ</Typography>
                <Typography variant="h4">Самарский университет</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                < FontAwesomeIcon icon={faGlobe} aria-hidden="true" size="3x"/>
                <Typography variant="h4" paragraph>EMAIL</Typography>
                <Typography variant="h4">nashmail@mail.ru</Typography>
                </Paper>
              </Grid>
          </Grid>
        </Grid>
        </Grid>
    </ThemeProvider>
    );
}

export default ContactPage;