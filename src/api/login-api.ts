import axios from 'axios'

const instans = axios.create({
    // baseURL: 'https://neko-back.herokuapp.com/2.0/',
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true,
    }
)


export const loginAPI = {
    loginUser(email: string, password: string,) {
        return instans.post('auth/login', {email, password, rememberMe: false})
    }
}