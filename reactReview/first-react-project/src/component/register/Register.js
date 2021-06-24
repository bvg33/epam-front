import React, {Component} from "react";
import style from './styles/RegisterStyle.module.css'
import epamLogo from './../../images/epamWithBag.png'
import {NavLink} from "react-router-dom";
import User from "../../entity/User";
import UserApi from "../../api/UserApi";

class Register extends Component {
    constructor(props) {
        super(props);
        this.registerClicked = this.registerClicked.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeRepeatPassword = this.changeRepeatPassword.bind(this);
        this.state = {
            loginInput: '',
            passwordInput: '',
            repeatPasswordInput: '',
            message: ''
        };
    }

    render() {
        return (
            <div className={style.register}>
                <img src={epamLogo} height="100" className={style.epamImage}/>
                <label><input className={style.login} onChange={this.changeLogin} placeholder="login"/></label>
                <label><input className={style.password} onChange={this.changePassword} placeholder="password"
                              type="password"/></label>
                <label><input className={style.repeatPassword} onChange={this.changeRepeatPassword}
                              placeholder="password" type="password"/></label>
                <div className={style.buttons}>
                    <button className={style.registerButton} onClick={this.registerClicked}>Register</button>
                    <NavLink to="/login">
                        <button className={style.cancelButton}>Cancel</button>
                    </NavLink>
                </div>
                <label className={style.message}>{this.state.message}</label>
            </div>
        )
    }

    changeLogin(event) {
        this.setState({loginInput: event.target.value});
    }

    changePassword(event) {
        this.setState({passwordInput: event.target.value});
    }

    changeRepeatPassword(event) {
        this.setState({repeatPasswordInput: event.target.value});
    }

    registerClicked() {
        const result = this.checkCredentials();
        if (result) {
            const stringifyUser = JSON.stringify(this.registerUser());
            const createUser = new UserApi();
            createUser.createUser(stringifyUser)
                .then(() => {
                    this.setState({message: 'Success'});
                })
                .catch(this.setState({message: "User with such login is already exist"}))
        } else {
            this.setState({message: "Passwords doesnt match"})
        }

    }

    checkCredentials = () => {
        return this.state.repeatPasswordInput === this.state.passwordInput;
    }

    registerUser = () => {
        const loginInput = this.state.loginInput;
        const passwordInput = this.state.passwordInput;
        return new User(loginInput, passwordInput);
    }
}

export default Register