import React, {Component} from "react";
import style from './styles/RegisterStyle.module.css'
import epamLogo from './../../images/epamWithBag.png'
import {NavLink} from "react-router-dom";
import {
    loginFieldChangeAction,
    registerButtonClickedAction,
    repeatPasswordFieldChangeAction
} from "../../redux/creator/RegisterActionCreator";
import {passwordFieldChangeAction} from "../../redux/creator/RegisterActionCreator";

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
                <label className={style.message}>{this.props.registerPageState.getState().registerPage.message}</label>
            </div>
        )
    }

    changeLogin(event) {
        const action = loginFieldChangeAction(event.target.value);
        this.props.registerPageState.dispatch(action);
    }

    changePassword(event) {
        const action = passwordFieldChangeAction(event.target.value);
        this.props.registerPageState.dispatch(action);
    }

    changeRepeatPassword(event) {
        const action = repeatPasswordFieldChangeAction(event.target.value);
        this.props.registerPageState.dispatch(action);
    }

    registerClicked() {
        const action = registerButtonClickedAction(this.props.registerPageState.dispatch);
        this.props.registerPageState.dispatch(action);
    }

}

export default Register