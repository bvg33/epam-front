import AuthApi from "../api/AuthApi";

export const loginServerRequest = (login, password, setToken, setInvalidCredentialsMessage) => {
    const authApi = new AuthApi();
    authApi.auth({login, password})
        .then(response => {
            setToken(response.token);
        })
        .catch(() => {
            setInvalidCredentialsMessage(true);
        });
}