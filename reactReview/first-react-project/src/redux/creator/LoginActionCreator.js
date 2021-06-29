export const setToken = (token) => {
    return ({type: 'SET-TOKEN', token})
}
export const loginFieldChangeAction = (loginText) => {
    return ({type: 'LOGIN-FIELD-CHANGE', loginText})
}
export const passwordFieldChangeAction = (passwordText) => {
    return ({type: 'PASSWORD-FIELD-CHANGE', passwordText})
}
export const invalidCredentials = (isInvalid) => {
    return ({type: 'INVALID-CREDENTIALS',isInvalid})
}