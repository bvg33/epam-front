import {connect} from "react-redux";
import Login from "./Login";
import {
    invalidCredentials,
    loginFieldChangeAction,
    passwordFieldChangeAction,
    setToken
} from "../../redux/creator/LoginActionCreator";

let mapStateToProps = (state) => {
    return {
        login: state.loginPage.login,
        password: state.loginPage.password,
        invalidCredentials: state.loginPage.invalidCredentials,
        token: state.loginPage.token
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setToken: (token) => {
            const action = setToken(token)
            dispatch(action);
        },
        loginFieldChange: (loginValue) => {
            const action = loginFieldChangeAction(loginValue);
            dispatch(action);
        },
        passwordFieldChange: (passwordValue) => {
            const action = passwordFieldChangeAction(passwordValue);
            dispatch(action);
        },
        setInvalidCredentialsMessage: (isInvalid) => {
            const action = invalidCredentials(isInvalid);
            dispatch(action);
        }
    }
}
export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);