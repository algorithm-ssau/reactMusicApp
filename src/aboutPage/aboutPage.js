import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function AboutPage(props) {

    return (
        <div className='conteiner'>
        <h1 className="text-center text-uppercase">О нас</h1>
        <p className="text-center w-75 m-auto">У нас вы можете приобрести продукцию ведущих мировых производителей: музыкальные инструменты и аксессуары, профессиональное концертное звуковое и световое оборудование, оборудование для студий, ди-джеев, а также системы Public Address. Мы предлагаем лучшие товары от ведущих мировых производителей, продукцию которых отличает высокое качество и профессиональная надежность.</p>
    </div>
    );
}

export default AboutPage;