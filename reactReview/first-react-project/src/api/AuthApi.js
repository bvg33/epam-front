import axios from "./axios/axios";

class AuthApi {
    auth = (data) => {
        const stringifyUser = JSON.stringify(data);
        return axios.post('/auth', stringifyUser)
            .then(response => response.data);
    }
}

export default AuthApi;