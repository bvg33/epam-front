import {connect} from "react-redux";
import Register from "./Register";
import {
    loginFieldChangeAction,
    passwordFieldChangeAction,
    repeatPasswordFieldChangeAction, setMessage
} from "../../redux/creator/RegisterActionCreator";

let mapStateToProps = (state) => {
    return {
        login: state.registerPage.login,
        password: state.registerPage.password,
        repeatPassword: state.registerPage.repeatPassword,
        message: state.registerPage.message
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        loginFieldChange: (loginValue) => {
            const action = loginFieldChangeAction(loginValue);
            dispatch(action);
        },
        passwordFieldChange: (passwordValue) => {
            const action = passwordFieldChangeAction(passwordValue);
            dispatch(action);
        },
        repeatPasswordFieldChange: (repeatPasswordValue) => {
            const action = repeatPasswordFieldChangeAction(repeatPasswordValue);
            dispatch(action);
        },
        setMessage: (message) => {
            const action = setMessage(message);
            dispatch(action);
        }
    }
}
export const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);