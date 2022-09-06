import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tiktok-backend-77.herokuapp.com/'
})

export default instance;