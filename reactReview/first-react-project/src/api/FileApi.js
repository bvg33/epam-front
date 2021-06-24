import axios from "./axios/axios";

class FileApi {
    getFiles = (url) => {
        return axios.get(url)
            .then(response => response.data)
    }
}

export default FileApi;