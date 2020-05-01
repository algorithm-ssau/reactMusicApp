import React, {useState, useContext, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "../UserContext";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Routes} from "../routes";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function CheckoutPage(props) {
    const {user, cart, removeFromCart} = useContext(UserContext);
    const classes = useStyles();

    console.log(cart);
    /*useEffect(() => {
        fetch(Routes.UserWishlist,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        }).then(response => response.json()).then(response => {
            if (response.code === 0) setUserWishlist(response.goods)
        })
    }, []);*/

    return (
        <div class="container ">
            <h1>Корзина</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="Товары">
                    <TableHead>
                        <TableRow>
                            <TableCell>Товар</TableCell>
                            <TableCell align="right">Количество</TableCell>
                            <TableCell align="right">Цена&nbsp;(Р)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map(item => (
                            <TableRow key={item.instrument.name}>
                                <TableCell component="th" scope="row">
                                    {item.instrument.name}
                                </TableCell>
                                <TableCell align="right">{item.count}</TableCell>
                                <TableCell align="right">{item.instrument.price * item.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}

export default CheckoutPage;