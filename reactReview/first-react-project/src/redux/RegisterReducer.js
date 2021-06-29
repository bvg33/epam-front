const initialParams = {
    login: '',
    password: '',
    repeatPassword: '',
    message: ''
}

export const registerReducer = (state = initialParams, action) => {
    switch (action.type) {
        case 'SET-MESSAGE': {
            return {...state, message: action.message};
        }
        case 'LOGIN-FIELD-CHANGE': {
            return {...state, login: action.loginText};
        }
        case 'PASSWORD-FIELD-CHANGE': {
            return {...state, password: action.passwordText};
        }
        case 'REPEAT-PASSWORD-FIELD-CHANGE': {
            return {...state, repeatPassword: action.repeatPasswordText};
        }
        default:
            return state
    }
}