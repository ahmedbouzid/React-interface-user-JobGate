import http from './axiosContent'
const updateO=(id , data)=>{
    return http.put(`/entreprise/offreupdate/${id}`,data)
}
const deleteOneO =(id)=>{
    return http.delete(`/entreprise/deleteOffre/${id}`)
}
const getByIdO=(id)=>{
    return http.get(`/entreprise/getOffre/${id}`)
}
const getAllO=()=>{
    return http.get('/entreprise/getAllO')
}
const getByEntreprise=(id )=>{
    return http.get(`/offre/getOByEntreprise/${id}`)
}
 export default {
    getAllO,
    getByIdO,
    getByEntreprise
 }