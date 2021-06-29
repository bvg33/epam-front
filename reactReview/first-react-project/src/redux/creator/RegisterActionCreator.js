export const setMessage = (message) => {
    return ({type:'SET-MESSAGE',message})
}
export const loginFieldChangeAction = (loginText) => {
    return ({type:'LOGIN-FIELD-CHANGE',loginText})
}
export const passwordFieldChangeAction = (passwordText) => {
    return ({type:'PASSWORD-FIELD-CHANGE',passwordText})
}
export const repeatPasswordFieldChangeAction = (repeatPasswordText) => {
    return ({type:'REPEAT-PASSWORD-FIELD-CHANGE',repeatPasswordText})
}