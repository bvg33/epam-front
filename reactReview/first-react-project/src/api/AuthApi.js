import axios from "./axios/axios";

class AuthApi {
    auth = (data) => {
        return axios.post('/auth', data)
            .then(response => response.data);
    }
}

export default AuthApi;