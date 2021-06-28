import UserApi from "../api/UserApi";

const initialParams = {
    login: '',
    password: '',
    repeatPassword: '',
    message: ''
}

export const registerReducer = (state = initialParams, action) => {
    switch (action.type) {
        case 'REGISTER-BUTTON-CLICKED': {
            registerUser(state,action.dispatch)
            return state;
        }
        case 'LOGIN-FIELD-CHANGE': {
            state.login = action.loginText;
            return state;
        }
        case 'PASSWORD-FIELD-CHANGE': {
            state.password = action.passwordText;
            return state;
        }
        case 'REPEAT-PASSWORD-FIELD-CHANGE': {
            state.repeatPassword = action.repeatPasswordText;
            return state;
        }
        default:
            return state
    }
}
const registerUser = (state,dispatch) => {
    const result = checkCredentials(state);
    if (result) {
        const user = createUserFromLoginAndPassword(state);
        const createUser = new UserApi();
        createUser.createUser(user)
            .then(() => {
                state.message = 'Success';
                dispatch({type:''});
            })
            .catch(state.message = "User with such login is already exist")
    } else {
        state.message = "Passwords doesnt match";
    }
}
const checkCredentials = (state) => {
    return state.repeatPassword === state.password;
}

const createUserFromLoginAndPassword = (state) => {
    const login = state.login;
    const password = state.password;
    return {login, password}
}