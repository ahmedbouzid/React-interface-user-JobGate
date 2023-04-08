import http from './axiosContent'
const login=(data)=>{
    return http.post('/auth/login' , data)

}
const logout=()=>{
    return http.post('/auth/logout')
}



export default {
    login,
    logout
}