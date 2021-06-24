import axios from "./axios/axios";
/*
class FileApi {
    getFiles = (url) => {
        return axios.get(url)
            .then(response => response.data)
    }
}*/
const fileApi = {
    getFiles:function (url){
        return axios.get(url)
            .then(response => response.data)
    }
}

export default fileApi;