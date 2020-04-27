import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./RegisterForm";

function RegisterPage(props) {
    const [isRegistered, setIsRegistered] = useState(null);
    const {register, handleSubmit} = useForm();
    const onSubmit = async (data) => {
        console.log(data);

        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        }).then(response => response.json());
        setIsRegistered(response);
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h2>Регистрация</h2>
            <RegisterForm handleSubmit={handleSubmit(onSubmit)} register={register}/>
            {
                isRegistered === null ? <div/> : isRegistered.reg ?
                <Redirect from={"/register"} to={"login"}/> :
                    <p className={'text-danger'}>{errorWhat(isRegistered.code)}</p>
            }
        </div>
    );
}

function errorWhat(code) {
    switch (code) {
        case 1: return "Данные не пришли на сервер. Пожалуйста, повторно заполните форму.";
        case 2: return "Обязательно заполнение всех полей. Пожалуйста, повторно заполните форму."
        case 11000: return "Данный логин уже используется. Пожалуйста, повторно заполните форму.";
    }
}

export default RegisterPage;