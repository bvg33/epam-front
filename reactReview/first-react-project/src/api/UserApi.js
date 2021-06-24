import axios from "./axios/axios";

class UserApi {
    createUser = (data) => {
        return axios.post('/users/newUser', data)
            .then(response => response.data);
    }
}

export default UserApi;