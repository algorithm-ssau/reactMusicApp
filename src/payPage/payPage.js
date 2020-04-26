import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcAmazonPay } from "@fortawesome/free-brands-svg-icons";
import { faCcApplePay } from "@fortawesome/free-brands-svg-icons";
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
        height: 140,
        width: 200,
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
            lineHeight: '2'
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
        }
        
    },
});
function PayPage(props) {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(5);
    
    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
        <Typography variant="h1" paragraph>Варианты оплаты в интернет-магазине "Музыкальный Маг"</Typography>
        <Typography variant="h3" paragraph>В нашем интернет-магазине вам доступно несколько удобных способов оплаты:</Typography>
        <div className="w-100"></div>
        <ul>
            <li><Typography variant="body1">Наличными в кассе магазина при самовывозе</Typography></li>
            <li><Typography variant="body1">Безналичным способом по выставленному нами счету</Typography></li>
            <li><Typography variant="body1">Пластиковой картой в кассе магазина при самовывозе</Typography></li>
            <li><Typography variant="body1" paragraph>Пластиковыми картами в режиме онлайн:</Typography></li>
            <Typography variant="body1"> Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо нажать кнопку «Оплата заказа
           банковской картой". Оплата происходит через ПАО СБЕРБАНК с использованием Банковских карт следующих платежных систем:</Typography>
        </ul>
        <Grid container className={classes.root} >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
              <Grid item>
                <Paper className={classes.paper}>
                <FontAwesomeIcon icon={faCcPaypal} aria-hidden="true" size="3x" />
                <Typography variant="h3">PayPal</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                <FontAwesomeIcon icon={faCcVisa} aria-hidden="true" size="3x"/>
                <Typography variant="body1">Visa International</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                <FontAwesomeIcon icon={faCcMastercard} aria-hidden="true" size="3x"/>
                <Typography variant="body1">Mastercard Worldwide</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                <FontAwesomeIcon icon={faCcAmazonPay} aria-hidden="true" size="3x"/>
                <Typography variant="body1">Amazon Pay</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                <FontAwesomeIcon icon={faCcApplePay} aria-hidden="true" size="3x"/>
                <Typography variant="body1">Apple Pay</Typography>
                </Paper>
              </Grid>
          </Grid>
        </Grid>
        </Grid>
        </div>
        </ThemeProvider>
    );
}

export default PayPage;