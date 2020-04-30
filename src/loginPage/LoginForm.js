import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Логин</label>
                <input type="text" name="username" className="form-control" ref={props.register}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <input type="password" name="password" className="form-control" ref={props.register}/>
            </div>
            <div className="form-group">
                <button type={"submit"} className="btn btn-warning">
                    Вход
                </button>
                <a routerLink="/register" className="btn btn-link-warning">Регистрация</a>
            </div>
        </form>
    );
}

export default LoginForm;