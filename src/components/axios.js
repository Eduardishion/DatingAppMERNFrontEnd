import axios from 'axios'
const instance = axios.create({
    //local
    //baseURL: "http://localhost:8001"
    //remoto
    baseURL: "https://app-mern-eduardihion.herokuapp.com"
})
export default instance;