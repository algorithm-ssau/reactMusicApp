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
    const {user} = useContext(UserContext);
    const [userWishlist, setUserWishlist] = useState([]);

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
            {user ? (
                    <div className="alert alert-warning" role="alert">
                        <p>Пожалуйста, зарегистрируйтесь или войдите в аккаунт для того, чтобы совершить покупку.</p>
                    </div>
            ) : (
                <p>табличка</p>
            )}
        </div>

    );
}

export default CheckoutPage;