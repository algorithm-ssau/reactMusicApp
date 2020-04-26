import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
  });
let theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontWeightMedium: 500,
        h1:{
            fontFamily: 'Rubik-Medium.woff',
            fontWeight: '500',
            fontSize: '48px',
            lineHeight: '2'
        },
        body1:{
            fontFamily: 'Rubik-Regular.woff',
            fontSize: '18px',
        },
        overline:{
            fontFamily: 'Rubik-Regular.woff',
            fontStyle: 'italic'
        }
        
    },
});
theme = responsiveFontSizes(theme);
function AboutPage(props) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <Typography variant="h1">О нашем сайте</Typography>
            <Typography variant="body1" paragraph>У нас вы можете приобрести продукцию ведущих мировых производителей: музыкальные инструменты и аксессуары, профессиональное концертное звуковое и световое оборудование, оборудование для студий, ди-джеев, а также системы Public Address. Мы предлагаем лучшие товары от ведущих мировых производителей, продукцию которых отличает высокое качество и профессиональная надежность.</Typography>
            <Typography variant="body1" paragraph>
            В нашем штате работают только опытные профессионалы, которые без труда смогут подобрать для вас необходимое музыкальное, световое и видео-оборудование.</Typography>
            <Typography variant="body1" paragraph>У нас есть своя мастерская, в которой каждый товар проходит предпродажную подготовку. Так же, вы можете воспользоваться услугами мастера по индивидуальной отстройке вашего инструмента.</Typography>
            <Typography variant="overline" textAlign="" paragraph>"Музыкальный Маг — место, где можно встретить людей, с которыми тебя объединит музыка"</Typography>
    </div>
    </ThemeProvider>
    );
}

export default AboutPage;