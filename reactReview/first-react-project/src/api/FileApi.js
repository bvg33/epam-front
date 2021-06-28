import axios from "./axios/axios";

const fileApi = {
    getFiles: (url) => {
        return axios.get(url)
            .then(response => response.data)
    }
}

export default fileApi;