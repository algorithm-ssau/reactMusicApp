import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function RegisterForm(props) {
    return (
            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label for="firstName">Имя</label>
                    <input type="text" name="firstName" className="form-control" ref={props.register}/>
                </div>
                <div className="form-group">
                    <label for="lastName">Фамилия</label>
                    <input type="text" name="lastName" className="form-control" ref={props.register}/>
                </div>

                <div className="form-group">
                    <label for="username">Логин</label>
                    <input type="text" name="username" className="form-control" ref={props.register}/>
                </div>
                <div className="form-group">
                    <label for="password">Пароль</label>
                    <input type="password" name="password" className="form-control" ref={props.register}/>
                </div>
                <div className="form-group">
                    <button type={"submit"} className="btn btn-warning">
                        Регистрация
                    </button>
                    <a routerLink="/login" className="btn link-warning">Войти</a>
                </div>
            </form>
    );
}

export default RegisterForm;