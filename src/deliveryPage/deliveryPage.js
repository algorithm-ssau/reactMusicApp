import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RubikWoff from '../Fonts/Rubik/Rubik-Regular.woff';
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
            fontWeight: '500',
            fontSize: '3em',
        },
        body1:{
            fontSize: '18px',
        },
        overline:{
            fontStyle: 'italic'
        },
        h3:{
            fontSize: '22px',
            fontWeight: '550',
        },
        
    },
});
theme = responsiveFontSizes(theme);
function DeliveryPage(props) {
    const classes = useStyles();
    return ( 
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <Typography variant="h1" gutterBottom>Способы доставки товара:</Typography>
            <div className="w-100"></div>
            <Typography variant="h3" gutterBottom>1. Самовывоз </Typography>
            <div className="w-100"></div>
            <Typography variant="body1" gutterBottom>Вы самостоятельно при желании можете забрать товар из нашего розничного магазина. </Typography>
            <div className="w-100"></div>
            <Typography variant="h3" gutterBottom>2. Курьерская доставка по г. Самара </Typography>
            <div className="w-100"></div>
            <Typography variant="body1" gutterBottom>Товар доставляется до дверей, по указанному вами адресу. Сроки и время доставки обсуждаются с менеджером интернет-магазина.</Typography>
            <div className="w-100"></div>
            <Typography variant="body1"gutterBottom>Условия курьерской доставки:</Typography>
<Typography variant="body1" gutterBottom>При сумме заказа от 5000р.* доставка по городу осуществляется бесплатно.</Typography>
<Typography variant="body1" gutterBottom>При заказе до 5000р. стоимость курьерской доставки составляет 300р.</Typography>
<Typography variant="body1" gutterBottom>Услуга по доставке, подъёму и сборке цифрового фортепиано в пределах г. Самары предоставляется бесплатно!</Typography>
<Typography variant="body1" gutterBottom>Для городов Тольятти и Новокуйбышевск при заказе от 5000р. так же осуществляется бесплатная курьерская доставка по городу до адреса получателя,
   при условиях, что вес отправления не превышает 10кг. и габариты упаковки не
   превышают размеры 750х550х500 мм </Typography>
<Typography variant="body1" gutterBottom>Остальные вопросы, связанные с доставкой товара по Самарской области, обсуждаются с менеджером интернет-магазина. </Typography>
<Typography variant="body1" gutterBottom>*в данном предложении не участвуют акционные товары и товары из распродажи.</Typography>
<Typography variant="body1" gutterBottom>**продукция компании Behringer так же не участвует в данном предложении.</Typography>
<div className="w-100"></div>
<Typography variant="h3" gutterBottom>3. Доставка по России транспортной компанией </Typography>
<Typography variant="body1" gutterBottom>При заказе через наш сайт, мы оказываем услуги по доставке товаров по всей России с нашего склада
   в Самаре крупнейшими транспортными компаниями.</Typography>
<Typography variant="body1" gutterBottom>В большинстве случаев, при сумме заказа от 20 000р.* предоставляется бесплатная доставка
   до терминала в вашем городе. При необходимости, вы можете дополнительно
   заказать доставку до дверей, по указанному вами адресу. В случае платной доставки её стоимость
   всегда зависит от удаленности вашего региона от центральной части страны, а также труднодоступности
   района доставки. Рассчитать приблизительную стоимость доставки вы всегда можете на сайте, выбранной вами транспортной
   компании или же воспользовавшись калькулятором компании «Деловые линии».</Typography>
<Typography variant="body1" gutterBottom>Условия доставки товара по России:</Typography>
<Typography variant="body1" gutterBottom>Осуществляется при условии 100% предоплаты.</Typography>
<Typography variant="body1" gutterBottom>*в данном предложении не участвуют акционные товары и товары из распродажи, а также все струнные инструменты, т.к. их перевозка требует дополнительной упаковки.</Typography>
<Typography variant="body1" gutterBottom>**продукция компании Behringer так же не участвует в данном предложении.</Typography>
        </div>  
        </ThemeProvider>
     );
     
}

export default DeliveryPage;