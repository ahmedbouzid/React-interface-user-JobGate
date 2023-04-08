import http from './axiosContent'
const getAll=()=>{
    http.get('/categorie/getAll')
}
export default {
    getAll
}