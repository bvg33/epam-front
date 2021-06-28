export const loginButtonClickedAction = (dispatch) => {
    return ({type:'LOGIN-BUTTON-CLICKED',dispatch})
}
export const loginFieldChangeAction = (loginText) => {
    return ({type:'LOGIN-FIELD-CHANGE',loginText})
}
export const passwordFieldChangeAction = (passwordText) => {
    return ({type:'PASSWORD-FIELD-CHANGE',passwordText})
}