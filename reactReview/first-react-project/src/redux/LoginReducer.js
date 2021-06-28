import AuthApi from "../api/AuthApi";

const initialParams = {
    invalidCredentials: false,
    login: '',
    password: '',
    token: ''
}
export const loginReducer = (state = initialParams, action) => {
    switch (action.type) {
        case 'LOGIN-BUTTON-CLICKED': {
            serverRequest(state,action.dispatch)
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
        default:
            return state;
    }
}
const serverRequest = (state,dispatch) => {
    const user = createUser(state);
    const authApi = new AuthApi();
    authApi.auth(user)
        .then(response => {
            state.token = response.token;
            dispatch({type:''});
        })
        .catch(state.invalidCredentials = true);
}
const createUser = (state) => {
    const login = state.login;
    const password = state.password;
    return {login, password}
}