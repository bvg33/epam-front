const initialParams = {
    invalidCredentials: false,
    login: '',
    password: '',
    token: ''
}
export const loginReducer = (state = initialParams, action) => {
    switch (action.type) {
        case 'SET-TOKEN': {
            return {...state, token: action.token};
        }
        case 'LOGIN-FIELD-CHANGE': {
            return {...state, login: action.loginText};
        }
        case 'PASSWORD-FIELD-CHANGE': {
            return {...state, password: action.passwordText};
        }
        case 'INVALID-CREDENTIALS': {
            return {...state, invalidCredentials: action.isInvalid};
        }
        default:
            return state;
    }
}