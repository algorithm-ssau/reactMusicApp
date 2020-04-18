import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function RegisterPage(props) {
    return (<div className="col-sm-6 offset-sm-3">
    <h2>Регистрация</h2>
        <div className="form-group">
            <label for="firstName">Имя</label>
            <input type="text" formControlName="firstName" className="form-control" />
            <div className="invalid-feedback">
            </div>
        </div>
        <div className="form-group">
            <label for="lastName">Фамилия</label>
            <input type="text" formControlName="lastName" className="form-control" />
            <div className="invalid-feedback">
            </div>
        </div>
        <div className="form-group">
            <label for="username">Логин</label>
            <input type="text" formControlName="username" className="form-control"/>
            <div className="invalid-feedback">
            </div>
        </div>
        <div className="form-group">
            <label for="password">Пароль</label>
            <input type="password" formControlName="password" className="form-control" />
            <div className="invalid-feedback">
            </div>
        </div>
        <div className="form-group">
            <button className="btn btn-warning">
                <span className="spinner-border spinner-border-sm mr-1"></span>
                Регистрация
            </button>
            <a routerLink="/login" className="btn link-warning">Войти</a>
        </div>
    </div>
    );
}

export default RegisterPage;