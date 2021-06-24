import React, {Component} from "react";
import epamLogo from './../../images/epamWithBag.png'
import styles from './style/LoginStyle.module.css'
import User from "../../entity/User";
import {NavLink, withRouter} from "react-router-dom";
import AuthApi from "../../api/AuthApi";

const  height = 100;
class Login extends Component {

    constructor(props) {
        super(props);
        this.loginButtonClick = this.loginButtonClick.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.state = {
            invalidCredentials: '',
            loginInput: '',
            passwordInput: ''
        };
    }

    render() {
        return (
            <div className={styles.login}>
                <img src={epamLogo} height={height} className={styles.epamLoginImage}/>
                <label><input className={styles.loginInput} onChange={this.changeLogin} placeholder="login"/></label>
                <label><input className={styles.passwordInput} onChange={this.changePassword} placeholder="password"
                              type="password"/></label>
                <button onClick={this.loginButtonClick} className={styles.loginButton}>Log In</button>
                <NavLink to="/register">
                    <button className={styles.loginRegisterButton}>
                        Register
                    </button>
                </NavLink>
                <label className={styles.invalidCredentials}>{this.state.invalidCredentials}</label>
            </div>);
    }

    changeLogin(event) {
        this.setState({loginInput: event.target.value});
    }

    changePassword(event) {
        this.setState({passwordInput: event.target.value});
    }

    loginButtonClick() {
        const stringifyUser = JSON.stringify(this.createUser());
        const authApi = new AuthApi();
        authApi.auth(stringifyUser)
            .catch(this.setState({invalidCredentials: 'Invalid Credentials'}))
            .then(response => {
                sessionStorage.setItem("token", response["token"]);
                this.props.history.push('/main');
            });
    }

    createUser = () => {
        const loginInput = this.state.loginInput;
        const passwordInput = this.state.passwordInput;
        return new User(loginInput, passwordInput);
    }
}

export default withRouter(Login);