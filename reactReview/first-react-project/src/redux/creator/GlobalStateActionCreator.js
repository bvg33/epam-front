export const enterFolder = (name) => {
    return ({type: 'ENTER-FOLDER', name})
}
export const goOutFromFolder = () => {
    return ({type: 'GO-OUT-FROM-FOLDER'})
}
export const logOut = () => {
    return ({type: 'LOGOUT'})
}
