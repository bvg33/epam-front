import React, {Component} from "react";
import epamLogo from './../../images/epamWithBag.png'
import styles from './style/LoginStyle.module.css'
import {NavLink, withRouter} from "react-router-dom";
import locale from "../../localization/Locale";
import {
    loginButtonClickedAction,
    loginFieldChangeAction,
    passwordFieldChangeAction
} from "../../redux/creator/LoginActionCreator";

class Login extends Component {

    constructor(props) {
        super(props);
        this.loginButtonClick = this.loginButtonClick.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.logInCheck = this.logInCheck.bind(this);
    }

    render() {
        const height = 100;
        this.logInCheck();
        return (
            <div className={styles.login}>
                <img src={epamLogo} height={height} className={styles.epamLoginImage}/>
                <label><input className={styles.loginInput} onChange={this.changeLogin}
                              placeholder={locale.login}/></label>
                <label><input className={styles.passwordInput} onChange={this.changePassword}
                              placeholder={locale.password} type="password"/></label>
                <button onClick={this.loginButtonClick} className={styles.loginButton}>{locale.login}</button>
                <NavLink to="/register">
                    <button className={styles.loginRegisterButton}>
                        {locale.register}
                    </button>
                </NavLink>
                <label
                    className={styles.invalidCredentials}>{(this.props.loginPageState.getState().loginPage.invalidCredentials) ? locale.invalidCredentialsText : ''}</label>
            </div>
        );
    }

    logInCheck() {
        const token = this.props.loginPageState.getState().loginPage.token;
        if (token !== '') {
            this.props.history.push('/main');
        }
    }

    changeLogin(event) {
        const action = loginFieldChangeAction(event.target.value);
        this.props.loginPageState.dispatch(action);
    }

    changePassword(event) {
        const action = passwordFieldChangeAction(event.target.value);
        this.props.loginPageState.dispatch(action);
    }

    loginButtonClick() {
        const action = loginButtonClickedAction(this.props.loginPageState.dispatch);
        this.props.loginPageState.dispatch(action);
    }
}

export default withRouter(Login);