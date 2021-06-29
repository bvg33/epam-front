import UserApi from "../api/UserApi";

export const registerUser = (state, setMessage) => {
    const result = checkCredentials(state);
    if (result) {
        const user = createUserFromLoginAndPassword(state);
        const createUser = new UserApi();
        createUser.createUser(user)
            .then(() => {
                setMessage('Success');
            })
            .catch(() => {
                setMessage('User with such login is already exist');
            })
    } else {
        setMessage('Passwords doesnt match');
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