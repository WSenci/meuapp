import axios from "axios";

const api = axios.create({
    baseURL: 'https://aulaprojetoapi.onrender.com'
})

export default api