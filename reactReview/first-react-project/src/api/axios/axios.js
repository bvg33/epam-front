import ax from "axios";

const axios = ax.create({
    withCredentials: true,
    baseURL: 'http://localhost:8083/epam_tr_war',
    headers: {'Content-Type': 'application/json;charset=utf-8'}
});

export const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default axios;