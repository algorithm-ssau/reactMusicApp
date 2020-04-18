import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage(props) {
    return (<div class="col-sm-6 offset-sm-3">
    <h2>Вход</h2>
        <div class="form-group">
            <label for="username">Логин</label>
            <input type="text" formControlName="username" class="form-control" />
            <div  class="invalid-feedback">
            </div>
        </div>
        <div class="form-group">
            <label for="password">Пароль</label>
            <input type="password" formControlName="password" class="form-control"  />
            <div class="invalid-feedback">
            </div>
        </div>
        <div class="form-group">
            <button class="btn btn-warning">
                <span class="spinner-border spinner-border-sm mr-1"></span>
                Вход
            </button>
            <a routerLink="/register" class="btn btn-link-warning">Регистрация</a>
        </div>
    </div>
     );
}

export default LoginPage;