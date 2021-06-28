import axios from "./axios/axios";

class UserApi {
    createUser = (data) => {
        const stringifyUser = JSON.stringify(data);
        return axios.post('/users/newUser', stringifyUser)
            .then(response => response.data);
    }
}

export default UserApi;