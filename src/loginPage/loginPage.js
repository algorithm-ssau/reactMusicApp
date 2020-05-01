import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./LoginForm";
import UserContext from "../UserContext";

function LoginPage(props) {
    let {setUser} = useContext(UserContext);
    const [isLogin, setIsLogin] = useState(null);
    const {register, handleSubmit} = useForm();
    const onSubmit = async (data) => {
        console.log(data);

        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        }).then(response => response.json());
        if (response.reg) {
            setUser(data);
        }
        setIsLogin(response);
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h2>Вход</h2>
            <LoginForm handleSubmit={handleSubmit(onSubmit)} register={register}/>
            {
                isLogin === null ? <div/> : isLogin.reg ?
                    <Redirect from={"/login"} to={"/"}/> :
                    <p className={'text-danger'}>{errorWhat(isLogin.code)}</p>
            }
        </div>
    );
}

function errorWhat(code) {
    switch (code) {
        case 1: return "Данные не пришли на сервер. Пожалуйста, повторно заполните форму.";
        case 2: return "Обязательно заполнение всех полей. Пожалуйста, повторно заполните форму."
        case 11000: return " Неверный логин или пароль. Пожалуйста, повторно заполните форму.";
    }
}

export default LoginPage;