import React, {Component} from "react";
import style from './styles/RegisterStyle.module.css'
import epamLogo from './../../images/epamWithBag.png'
import {NavLink} from "react-router-dom";
import {
    loginFieldChangeAction,
    passwordFieldChangeAction,
    repeatPasswordFieldChangeAction
} from "../../redux/creator/RegisterActionCreator";
import {registerUser} from "../../service/RegisterService";

class Register extends Component {
    constructor(props) {
        super(props);
        this.registerClicked = this.registerClicked.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeRepeatPassword = this.changeRepeatPassword.bind(this);
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
                <label className={style.message}>{this.props.message}</label>
            </div>
        )
    }

    changeLogin(event) {
        this.props.loginFieldChange(event.target.value);
    }

    changePassword(event) {
        this.props.passwordFieldChange(event.target.value);
    }

    changeRepeatPassword(event) {
        this.props.repeatPasswordFieldChange(event.target.value);
    }

    registerClicked() {
        const {login, password, repeatPassword} = this.props;
        const setMessage = this.props.setMessage;
        registerUser({login, password, repeatPassword}, setMessage);
    }

}

export default Register