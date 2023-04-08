import http from './axiosContent'
const create =(data)=>{
    return http.post('/candidat/commentaire' ,data)
}
const getAll =()=>{
    return http.get('/candidat/allcommentaire' )
}
const getById=(id)=>{
    return http.get(`/candidat/commentId/${id}`)
}
const update=(id , data)=>{
    return http.put(`/candidat/updateComment/${id}`,data)
}
const deleteOne = (id)=>{
return http.delete(`/candidat/deleteComm/${id}`)
}
export default {
    create ,
    getAll,
    getById,
    update,
    deleteOne,
}